const dotenv = require('dotenv');
const generateRandomString = require('../utils/generateRandomString');
const querystring = require('querystring');
const request = require('request');

dotenv.config();
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const redirect_client = process.env.REDIRECT_CLIENT;

const stateKey = 'spotify_auth_state';
const authController = {
    login: (req, res) => {
        const state = generateRandomString(16);
        res.cookie(stateKey, state)

        const scope = 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state';
        res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state
            }));
    },

    callback: (req, res) => {
        var code = req.query.code || null;
        var state = req.query.state || null;
        var storedState = req.cookies ? req.cookies[stateKey] : null;

        if (state === null || state !== storedState) {
            res.redirect('/#' +
                querystring.stringify({
                    error: 'state_mismatch'
                }));
        } else {
            res.clearCookie(stateKey);
            var authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                form: {
                    code: code,
                    redirect_uri: redirect_uri,
                    grant_type: 'authorization_code'
                },
                headers: {
                    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
                },
                json: true
            };

            request.post(authOptions, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    const access_token = body.access_token;
                    const refresh_token = body.refresh_token;

                    const options = {
                        url: 'https://api.spotify.com/v1',
                        headers: { Authorization: 'Bearer ' + access_token },
                        json: true,
                    };

                    request.get(options, async (error, response, body) => {
                        res.redirect(
                            `${redirect_client}/?` +
                            querystring.stringify({
                                token: access_token,
                                refresh_token: refresh_token,
                            })
                        );
                    });
                } else {
                    res.redirect('/#' +
                        querystring.stringify({
                            error: 'invalid_token'
                        })
                    );
                }
            });
        }
    },

    refreshToken: (req, res) => {
        const refresh_token = req.query.refresh_token;
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                Authorization:
                    'Basic ' +
                    Buffer.from(client_id + ':' + client_secret).toString('base64')
            },
            form: {
                grant_type: 'refresh_token',
                refresh_token: refresh_token
            },
            json: true,
        };
        request.post(authOptions, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const access_token = body.access_token;
                res.send({
                    access_token: access_token
                });
            }
        });
    }
};

module.exports = authController;