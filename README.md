# Overview
A simple navigation demo built by Cortney Robinson. 


## Scripts

### Start App
``` npm run start```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Run the `npm run start` script in order to run this react app locally. 

### Run Sass
```npm run sass```

The `npm run sass` command runs the sass/scss compiler. All scss assets are located in the `assets/scss/` directory and compiled to the `assets/css/` directory. See scss architecture notes below.


## Dependencies
- [Sass](https://www.npmjs.com/package/sass)
- [React Router](https://www.npmjs.com/package/react-router)
- [React Icons](https://react-icons.github.io/react-icons/)


## Notes

**Function**

The primary functional component and data are located in the `components/ui/sidebar/` directory. The `SidebarData.js` file provides the navigation data and hierarchy for the `Sidebar.js` and `SubMenu.js` components primarily responsible for rendering the navigation sidebar. The `SidebarData.js` file contains an array of nav objects populated with relavant properties for the navigation display. 

**Style**

Associated scss files are located in the `assets/styles/scss/` directory. Rather than using `styled components`, tailwind, or some other css/style framework I opted to use custom scss styling and utilize a class oriented display approach instead of a react based state approach to controlling the toggling of the app's sidebar.


The organization of the scss assets is inline with an atomic design approach. Styling is contained to specific or general ui instances/patterns listed below. 
- `abstacts` : general css imports (variables,mixins,font imports etc)
- `base` : app wide resets and defaut styls
- `comps`: UIcomponent (not necessarily react component) specifc styles
- `layouts`: React comps/page specific styles would be located here
- `utils`: General utility classes or animations would be located here.