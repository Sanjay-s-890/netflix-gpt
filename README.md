# Netflix GPT
- Create React App
- Configured tailwindcss
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase setup
- deploying our app to production
- create signup user account
- Implement sign in user Api
- created redux store with userSlice
- Implemented sign out
- update profile
- Bugfix: sign up user displayName & profile pic update
- Bugfix: if the user is not logged in Redirect /browse to login page and vice-versa
- unsubscribed to the onAuthStateChanged callback
- add hardcoded values to the constants file
- register TMDB API & create an app & get access token
- get data from TMDB "now playing movies" list API
- custom hook for Now playing movies
- created movieSlice
- update store with movies data
- planning for MainContainer & SecondaryContainer
- fetch data for trailer video
- update store with trailer video data
- embedded the youtube video & make it autoplay & mute
- tailwind classes to make MainContainer look good


# Features
- Login/Signup page
  - sign in/ sign up Form
  - redirect to browse page
- Browse (after authentication)
  - Header
  - Main movie
    - trailer in background
    - title and discription
    - movie suggestion
      - movieList * n
- Netflix GPT
  - search bar
  - movie suggestions
  

   - if user is logged in, redirect him to browse page

# challenges:
- redux bug- photoURL & displayName appear after refresh
  - dispatch addUser() & removeUser() added in Login.js also.
  - initially only body.js had dispatch.
  - so the photoURL & displayName is received late to the browser. By the time the dispatch is done and the both the feilds are null.
- access browse page from sign in page itself by changing directory
  - if user is present, navigate to browse page automatically and to sign in page is not logged in.
  - we cannot navigate out of RouterProvider so move the useEffect to header section to make it global
- api call happens two times. this is because of StrictMode.
  - StrictMode does extra rendering of you component to check inconsistency of your calls.
  - it only happens in development mode.