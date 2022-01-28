const jwt = require ('jsonwebtoken');
const aadutils = require('./aadutils');



const pubKey = aadutils.rsaPublicKeyPem('tVKUtcx_n9rt5afY_2WFNvU6PlFMggCatsZ3l4RjKxH0jgdLq6CScb0P3ZGXYbPzXvmmLiWZizpb-h0qup5jznOvOr-Dhw9908584BSgC83YacjWNqEK3urxhyE2jWjwRm2N95WGgb5mzE5XmZIvkvyXnn7X8dvgFPF5QwIngGsDG8LyHuJWlaDhr_EPLMW4wHvH0zZCuRMARIJmmqiMy3VD4ftq4nS5s8vJL0pVSrkuNojtokp84AtkADCDU_BUhrc2sIgfnvZ03koCQRoZmWiHu86SuJZYkDFstVTVSR0hiXudFlfQ2rOhPlpObmku68lXw-7V-P7jwrQRFfQVXw', 'AQAB');


var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJpc3MiOiJodHRwczovL2F1dGhtZXJpZ2h0LmIyY2xvZ2luLmNvbS85MmRmNTJlYi0yODE4LTQyZWItOGZlNy05MDAyN2VhMDRkODEvdjIuMC8iLCJleHAiOjE2NDMzNTE1MzksIm5iZiI6MTY0MzM0NzkzOSwiYXVkIjoiMDMzNzg3M2ItNWMxNC00NGRiLWFiYTEtYTBkMzUzMjVhYjk0Iiwib2lkIjoiMDkxNjJlOTktMTYwZC00YWNlLThmOTYtY2M1MjE4MzI5NTRkIiwic3ViIjoiMDkxNjJlOTktMTYwZC00YWNlLThmOTYtY2M1MjE4MzI5NTRkIiwiZW1haWxzIjpbImhwYXRpbEBueWl0LmVkdSJdLCJ0ZnAiOiJCMkNfMV9EZWZhdWx0U2lnblVwU2lnbkluIiwibm9uY2UiOiJhbnlSYW5kb21WYWx1ZSIsImF6cCI6IjAzMzc4NzNiLTVjMTQtNDRkYi1hYmExLWEwZDM1MzI1YWI5NCIsInZlciI6IjEuMCIsImlhdCI6MTY0MzM0NzkzOX0.mktMaHy5Fig2JZZeetS7H11-hO_szbW94PY8Ao3jPTLUZjJoLLIWicYP_eRXaNSs6RLp2y1_4CGNKuK1-1AsKScgrXcljk3Xe3zik-XNe_dvAmAYmLpaYIg0M4t23OTF91n4CjJVnQTrx-hO9srMvA-PgfkLSOmvYXkGjwGh8LMFGmMctkvWp_c9aq-Mcl9GeRmjHEMfn4D_rZZPRn_hT2iEFFIndqf4d7CtZFX1iTtRxRO73ecKnak9Yea4SIttVil1I7rhUy_xcyMHSsa4pja0huSVB6lCM1j5VgoOuMhDwQkRdGvmWNZHTNOLEZaoZQmW0jjh_YLQf5GEm-lU_g'
var verifyOptions = {
    issuer:  'https://authmeright.b2clogin.com/92df52eb-2818-42eb-8fe7-90027ea04d81/v2.0/',
    subject:  '09162e99-160d-4ace-8f96-cc521832954d',
    audience:  '0337873b-5c14-44db-aba1-a0d35325ab94',
    algorithm:  ["RS256"]
   };

var decodedTokenfunc = jwt.verify(token, pubKey, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(decodedTokenfunc));

exports.decodedToken = decodedTokenfunc
