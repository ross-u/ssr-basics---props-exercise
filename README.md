# M2 - Server Side Rendering

<br>

![img](https://i.imgur.com/4BIstH5.png)

## Pass the props - Exercise

<br>

### Getting Started

First you will need to clone the repository and open the directory with the cloned code:

```bash
# Clone the repository
git clone https://github.com/ross-u/ssr-basics---props-exercise.git


# Navigate to the directory
cd ssr-basics---props-exercise


# Open in VSCode
code .
```

Once in the root directory of the cloned project, install all of the `npm` dependencies of the app, coming from the `package.json` manifest:

```bash
npm install
```

Start the server.

```jsx
npm run start
```

Remember to restart the server every time you include new changes and you want to see it in the browser.

<br>

### Introduction

In this exercise you will have to create a smaller component used withing the `Dashboard.jsx` and properly pass data to it, using the `props`.

The starter code is already included. The route serving the `Dashboard` view is already included in the `app.js`:

```js
app.get("/dashboard", (req, res, next) => {
  app.render("Dashboard");
});
```

<br>

As well the `Dashboard.jsx` view is already included and has all the code that you need.

Open the `Dashboard.jsx` file before going to the next step and let's take a look at it.

You will notice that file already containt all the code. Inside of the `return` of you will notice that component `<UserProfile />` is used and it has the following data passed to it as props: `name`, `linkedinUrl`, `profilePhoto`.

##### `views/Dashboard.jsx`

```jsx
      <UserProfile
        name="Bill Gates"
        linkedinUrl="https://www.linkedin.com/in/williamhgates/"
        profilePhoto="https://i.imgur.com/sSoDxLe.jpg"
      />


      <UserProfile
        name="Maggie Appleton"
        linkedinUrl="https://www.linkedin.com/in/maggieappleton/"
        profilePhoto="https://i.imgur.com/uRvE7z3.jpg"
      />
```

<br>

### Task

Create/implement the `UserProfile` component and display the passed props `name`, `linkedinUrl` and `profilePhoto`.

As the HTML content of the `UserProfile` component you should use the markup sample provided in the `user-profile.html` file in the root directory

##### `user-profile.html`

```html
<section className="user-profile">
  <img src="profile photo url" alt="" />
  <h3>User: John Doe</h3>
  <a href="linkedin-url-goes-here">
    <button>See the profile</button>
  </a>
</section>
```

Follow the comments given in the file as the guidance of the steps that you will need to do.

As a reminder on how to pass and use the props, you may take a look at the example of the `StudentsPanel` and `StudentCard` components, included in this repository.

**Note: remember to export your component at the end once done, like this:**

##### `views/components/UserProfile.jsx`

```jsx
module.exports = UserProfile;
```

<br>

### Bonus

Once done implementing the initial task, you may experiment by passing additional props to your `UserProfile` component or by creating a new component and using it in the `Dashboard`. It is all up to your imagination.
