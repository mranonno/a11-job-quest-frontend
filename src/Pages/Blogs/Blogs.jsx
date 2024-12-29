import React from "react";
import accessToken from "../../assets/accessToken.png";
import refreshToken from "../../assets/refreshToken.png";
import express from "../../assets/Express.jpg";
import nest from "../../assets/nest.jpg";

const Blogs = () => {

  return (
    <div className="lg:mx-24 lg:mt-12 mx-4 mt-5 bg-slate-300 shadow-lg bg-opacity-20 rounded-xl lg:p-8 p-4">
      <h3 className="text-lg font-medium">
        <span className="font-bold text-2xl mr-3">Question:</span>
        What is an access token and refresh token? How do they work and where
        should we store them on the client side?
      </h3>
      <h3 className="text-2xl font-bold lg:mb-12 mb-4">Answers:</h3>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="flex flex-col lg:flex-row gap-4 lg:gap-12"
      >
        <div className="lg:w-1/2 bg-white rounded-xl flex items-center">
          <img src={accessToken} alt="tokenImage" />
        </div>
        <div>
          <h3 className="text-lg underline font-semibold">Access Token:</h3>
          <p>
            An access token is a credential used to access protected resources
            on behalf of a user or application in a secure way. It's commonly
            used in authentication and authorization processes.
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-medium">
                Authentication: <br />
              </span>{" "}
              Users or applications authenticate with an authorization server to
              request access to resources.
            </p>
            <p>
              <span className="font-medium">
                Authorization Grant: <br />
              </span>{" "}
              Upon successful authentication, the authorization server issues an
              access token to the client application.
            </p>
            <p>
              <span className="font-medium">
                Accessing Resources: <br />
              </span>
              The client includes the access token in requests to access
              protected resources from the resource server. <br />
            </p>
            <p>
              <span className="font-medium">
                Validation: <br />
              </span>
              The resource server validates the access token to ensure the
              request is authorized.
            </p>
            <p>
              <span className="font-medium">
                Expiration: <br />
              </span>
              Access tokens typically have a limited lifespan and may need to be
              refreshed periodically.
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1000" className="mt-4">
            <h3 className="font-medium text-lg">
              As for where to store access tokens on the client side:
            </h3>
            <p>
              Browser-Based Clients, Native Mobile Apps:, Desktop Applications:
              Server-Side Applications
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse mt-12 gap-12">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="lg:w-1/2 bg-white rounded-xl flex items-center"
        >
          <img className="rounded-xl" src={refreshToken} alt="tokenImage" />
        </div>
        <div>
          <h3 className="text-lg underline font-semibold">Refresh Token:</h3>
          <p>
            A refresh token is a concept used in authentication protocols like
            OAuth 2.0 to enable long-lived access to resources on behalf of a
            user without requiring them to reauthenticate every time.
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-medium">
                Initial Authentication:
                <br />
              </span>
              User logs in, receives access token (short-lived) and refresh
              token (long-lived).
            </p>
            <p>
              <span className="font-medium">
                Access Token Expiry: <br />
              </span>
              Access tokens have a limited lifespan for security reasons. When
              an access token expires, the application can no longer use it to
              access resources.
            </p>
            <p>
              <span className="font-medium">
                Using Refresh Token:
                <br />
              </span>
              When access token expires, the client sends the refresh token to
              the server to get a new access token.
            </p>
            <p>
              <span className="font-medium">
                Storing Refresh Token: <br />
              </span>
              Store refresh token securely on the client-side (e.g., HTTP
              cookies with security flags for web apps, OS-provided secure
              storage for mobile apps).
            </p>
            <p>
              <span className="font-medium">
                Expiration: <br />
              </span>
              Access tokens typically have a limited lifespan and may need to be
              refreshed periodically.
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1000" className="mt-4">
            <h3 className="font-medium text-lg">
              As for where to store refresh tokens on the client side:
            </h3>
            <p>
              OAuth 2.0 Authorization Code Flow, Token Refresh Proxy,Token
              Rotation, In-memory Storage with Volatile Tokens, HTTP Only
              Cookies,Secure Storage.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:pr-48">
        <h3 className="text-lg font-medium mt-24">
          <span className="font-bold text-2xl mr-3">Question:</span>What is
          express js?
        </h3>
        <div className="lg:w-1/2 my-8 bg-white rounded-xl flex items-center">
          <img className="rounded-2xl" src={express} alt="tokenImage" />
        </div>
        <p className="text-lg font-medium">
          {" "}
          ExpressJS is considered a minimal as well as flexible web application
          framework of Node.js
        </p>
        <br />
        <p>
          which gives robust features for use of the web as well as mobile
          applications. ExpressJS is also considered an open-source framework,
          and it was developed and maintained by the foundation of NodeJS.
        </p>
        <br />
        <p>
          It also gives a minimal interface in order to make our applications.
          ExpressJS, in addition, gives us tools that are needed in order to
          build the app. ExpressJS is also flexible since there exist various
          modules that are made available on npm and that can be directly
          plugged into it, i.e, Express.
        </p>
      </div>
      <h3
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-lg font-medium mt-5 lg:mt-24"
      >
        <span className="font-bold text-2xl mr-3">Question:</span>What is Nest
        js?
      </h3>
      <div className="lg:pr-48">
        <div className="lg:w-1/2 my-8 bg-white rounded-2xl flex items-center">
          <img className="rounded-2xl" src={nest} alt="tokenImage" />
        </div>
        <div>
          <h3 className="text-lg font-medium">
            {
              "Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications."
            }
          </h3>
          <br />
          <p>
            {
              "This is how the NestJS team defines Nest. Yep, I know that if you read this, you may think node.js already has popular frameworks like Express (If you don’t know what Express is? no worries, it is a Node.js framework). Then what is the point of using this kind of new framework?"
            }
          </p>
          <br />
          <p>
            {
              "Yes, NestJS is also a backend framework like Express. But it addresses a few problems which Express haven’t answered."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
