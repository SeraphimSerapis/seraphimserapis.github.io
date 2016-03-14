---
title: "Using npm modules via GitHub"
date: 2014-06-01 08:53
tags: [node, productivity]
---
At most of the hackathons that I am attending for PayPal I see people running into the same issues with Node projects over and over again: a certain Node module they want to use (via [npmjs.org](http://npmjs.org/)) is faulty or doesn't 100% do what they want to do and they have no idea how to change this.

<!-- more -->

For most of the popular modules like [Passport](http://passportjs.org/) there is a [GitHub repo](https://github.com/jaredhanson/passport) that is received frequest pull requests that either fix issues or add new functionality. In case these changes (that you might want to access) were not merged into the project and the module was redeployed to npmjs.org there is no simple way to just run `npm install package_name` to access these features.

Gladly there is a way to modules that were hosted on GitHub by modifying your project's `package.json` file. I'll show you how by using the example of using Passport for Node with an updated version of the [PayPal Strategy](http://github.com/jaredhanson/passport-paypal-oauth) (since the old one uses scopes and endpoints that we don't use anymore).

The dependencies section in `package.json`'would look like the following after running both `npm install passport --save` and `npm install passport-paypal-oauth --save`:

```javascript
"dependencies": {  
	[...],  
	"passport": "^0.2.0",  
	"passport-paypal-oauth": "^0.1.0"  
}
```

As you can see in [my GitHub profile](http://github.com/seraphimserapis/) I've [forked the repository](http://github.com/SeraphimSerapis/passport-paypal-oauth) to update the code and [filed a pull request](http://github.com/jaredhanson/passport-paypal-oauth/pull/3). As it didn't get accepted yet there is no simple way for people to use [link](http://developer.paypal.com/docs/integration/direct/identity/)Log In with PayPal within their Node projects (without implementing it themself).

To change this we'll update our package.json to point to the GitHub repository:

```javascript
"dependencies": {
	[...],
	"passport": "^0.2.0",
	"passport-paypal-oauth": "https://github.com/SeraphimSerapis/passport-paypal-oauth/tarball/master"
}
```

By adding the Node modules repository and adding `/tarball/master` to the URL you provide a mechanism for `npm` to hook into the updated module and avoid messy things like editing the module yourself or copy pasting code.

When looking into the [documentation](http://www.npmjs.org/doc/cli/npm-install.html) for `npm install` you'll notice that a few different notations and methods are supported. You can even do thinks like accessing certain tags or branches:

```bash
git+ssh://git@github.com:npm/npm.git#v1.0.27
git+https://isaacs@github.com/npm/npm.git
git://github.com/npm/npm.git#v1.0.27
```

Let me know what you think,  
Tim
