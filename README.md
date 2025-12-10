 A basic proof of concept of the CVE-2025-29927 vulnerability that allows to bypass the middleware scripts. 
 Details: [Read Here](https://zhero-web-sec.github.io/research-and-things/nextjs-and-the-corrupt-middleware)


This uses Next.js version 15.2.2.
The vulnerability allows the user to bypass the middleware script which contains the verification and can access the admin page without login.
This can be done by adding the Header ```x-middleware-subrequest: src/middleware:src/middleware:src/middleware:src/middleware:src/middleware``` to the request

