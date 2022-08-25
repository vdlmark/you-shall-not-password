# You shall not password! 🧙

---

![user](/assets/user.svg)
<!-- .element: class="svg-white" -->

> Welcome123
<!-- .element: class="fragment fade-in" -->

<img src="assets/arrow-down.svg" alt="arrow-down" style="width:50px;"/><br />
<img src="assets/website.svg" alt="website" />
<!-- .element: class="fragment fade-in svg-white" -->

--

![developer](/assets/developer.svg)
<!-- .element: class="svg-white" -->

> Welcome123

<img src="assets/arrow-down.svg" alt="arrow-down" style="width:50px;"/><br />
<img src="assets/database.svg" alt="database" />
<!-- .element: class="fragment fade-in svg-white" -->

--

![malicious-party](/assets/malicious_party.svg)
<!-- .element: class="svg-white" -->

> Welcome123
<!-- .element: class="fragment fade-in" -->

<img src="assets/arrow-up.svg" alt="arrow-up" style="width:50px;"/><br />
<img src="assets/database.svg" alt="database"/>
<!-- .element: class="fragment fade-in svg-white" -->

---

![user](/assets/user.svg)
<!-- .element: class="svg-white" -->

> Welcome123

<img src="assets/arrow-down.svg" alt="arrow-down" style="width:50px;"/><br />
<img src="assets/website.svg" alt="website" />
<!-- .element: class="fragment fade-in svg-white" -->

--

![developer](/assets/developer.svg)
<!-- .element: class="svg-white" -->

> `************`
<!-- .element: class="fragment fade-in" -->

<img src="assets/arrow-down.svg" alt="arrow-down" style="width:50px;"/><br />
<img src="assets/encrypted-database.svg" alt="encrypted-database"/>
<!-- .element: class="fragment fade-in svg-white" -->

--

![malicious-party](/assets/malicious_party.svg)
<!-- .element: class="svg-white" -->

> Welcome123
<!-- .element: class="fragment fade-in" -->

<img src="assets/arrow-down.svg" alt="arrow-down" style="width:50px;"/><br />
<img src="assets/website.svg" alt="website" />
<!-- .element: class="fragment fade-in svg-white" -->

---

![user](/assets/user.svg)
<!-- .element: class="fragment fade-in svg-white" -->

> Correct Horse Battery Staple
<!-- .element: class="fragment fade-in" -->

<img src="assets/arrow-down.svg" alt="arrow-down" style="width:50px;"/><br />
<img src="assets/website.svg" alt="website" />
<!-- .element: class="fragment fade-in svg-white" -->

--

![correct-horse-battery-staple](/assets/correct-horse-battery-staple.png)

--

![developer](/assets/developer.svg)
<!-- .element: class="svg-white" -->

![forgot-password](/assets/forgot-password.svg)
![forgot-password](/assets/compliance.svg)
<!-- .element: class="fragment svg-white" -->

> Password forget flow <br />
> Password policies <br />
> Renewal of passwords
<!-- .element: class="fragment fade-in svg-white" -->

--

![malicious-party](/assets/malicious_party.svg)
<!-- .element: class="svg-white" -->

![phishing](/assets/phishing.svg)
![phishing](/assets/brute-force.svg)
<!-- .element: class="fragment fade-in svg-white" -->

> Phising sites <br />
> Brute force
<!-- .element: class="fragment fade-in" -->

---

Something about a lot of passwords leaked online

---

> What problem are we solving here?

--

![user](/assets/user.svg)
<!-- .element: class="svg-white" -->

> Frustrated

--

![developer](/assets/developer.svg)
<!-- .element: class="svg-white" -->

> Annoyed

--

![malicious-party](/assets/malicious_party.svg)
<!-- .element: class="svg-white" -->

> Will find a way to get your password!

---

### We are _sharing_ our _secret_!

---

## Lucien Immink, B.eng

--

![lucien-immink](/assets/lucien-immink.webp)<!-- .element: class="circle" -->

--

Software Architect &</br>
Developer Advocate @ _iO_</br>
</br>
Google Developer Expert

---

## Mark van der Linden

--

![mark-van-der-linden](/assets/mark-van-der-linden.jpg)<!-- .element: class="circle" -->

--

Software Architect &</br>
Developer Advocate @ _iO_</br>

---

## Single Sign-on

![sso](/assets/sso.png)
<!-- .element: class="fragment fade-in" -->

--

## Single Sign-on
1. ✔️ Easy to use
<!-- .element: class="fragment fade-in" -->
2. ✔️ High security standards
<!-- .element: class="fragment fade-in" -->
3. ✔️ Only one password
<!-- .element: class="fragment fade-in" -->

--

## Single Sign-on
1. ❌ Privacy implications
<!-- .element: class="fragment fade-in" -->
2. ❌ Relying (again) on big tech companies
<!-- .element: class="fragment fade-in" -->
3. ❌ Still using a password!
<!-- .element: class="fragment fade-in" -->

---

## 2FA

---

## Passwordless

---

> ![fido-alliance](/assets/fido-alliance.png)

--

#### FIDO Alliance
> - Standards to reduce passwords<!-- .element: class="fragment fade-in-then-semi-out" -->
> - Google, Mirosoft, Apple and Mozilla<!-- .element: class="fragment fade-in-then-semi-out" -->
> - Passwordless authentication!<!-- .element: class="fragment fade-in" -->

![yubi-key](/assets/yubi-key.png)<!-- .element: class="fragment fade-in" -->

---

<img src="assets/webauthentication.svg" alt="webauthentication" style="width:250px;"/>

><img src="assets/edge.png" alt="edge" style="width:80px;"/>
  <br />Browser Support
<!-- .element: class="fragment fade-in" -->

><img src="assets/key-pair.svg" alt="key-pair" style="width:125px;"/> 
<br />Public Key Cryptography
<!-- .element: class="fragment fade-in" -->

--

Platform Authenticators
> ![platform-authenticators](/assets/platform-authenticators.svg)

--

Roaming Authenticators
> ![roaming-authenticators](/assets/roaming-authenticators.svg)

---

## DEMO

--

<iframe style="width:100%; height:400px;" data-src="https://localhost/auth/realms/passwordless/account/" data-preload></iframe>
<io-webcam-view style="display: inline-block; width: 400px;" width="720" height="400">
  webcam view
</io-webcam-view>

---

## WebAuthn API

--

## Registration

```js[1-3|6|7-10|11-15|16|17-19|20]
const credential = await navigator.credentials.create({
    publicKey: publicKeyCredentialCreationOptions
});

const publicKeyCredentialCreationOptions = {
    challenge: ******,
    rp: {
        name: "iO",
        id: "iodigital.com",
    },
    user: {
        id: ******,
        name: "mark.vanderlinden@iodigital.com",
        displayName: "Mark",
    },
    pubKeyCredParams: [{alg: -7, type: "public-key"}],
    authenticatorSelection: {
        authenticatorAttachment: "cross-platform",
    },
    timeout: 60000
};
```
--

## Authentication

```js[1-3|6|7-11|12]
const credential = await navigator.credentials.get({
    publicKey: publicKeyCredentialRequestOptions
});

const publicKeyCredentialRequestOptions = {
    challenge: ******,
    allowCredentials: [{
        id: ******,
        type: 'public-key',
        transports: ['usb', 'ble', 'nfc'],
    }],
    timeout: 60000
}
```
---

## Thank you

> Start forgetting those passwords
<!-- .element: class="fragment fade-in" -->