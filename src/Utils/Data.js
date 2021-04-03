import GitHubIcon from '@material-ui/icons/GitHub';
 import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
 import recipe from '../Utils/Images/recipe1.JPG';
 import movie from '../Utils/Images/movies.JPG';
 import covid from '../Utils/Images/covid.JPG';
 import youtube from '../Utils/Images/youtube.JPG';
 import ai from '../Utils/Images/ai.JPG';


export default{
    portfolio:[
    {
        tag:'API',
        image:recipe,
        title:'Recipe App',
        caption:'Recipes of various foods. ',
        description:'App to get recipe of various foods.',
        links:[
            {link:'https://github.com/durgesh0812/PROJECT-1--EDAMAM-Recipe-Search-API-DESIGN',icon:<GitHubIcon/>},
            {link:'https://dazzling-golick-afd862.netlify.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'CLONE',
        image:youtube,
        title:'You Tube Clone',
        caption:'A clone of You Tube',
        description:'this is project desc',
        links:[
            {link:'https://github.com/durgesh0812/you_tube_clone',icon:<GitHubIcon/>},
            {link:'https://clone-28382.web.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'API',
        image:movie,
        title:'Filmyy',
        caption:'A movie searcher',
        description:'App where you can find movies details',
        links:[
            {link:'https://www.google.com',icon:<GitHubIcon/>},
            {link:'https://www.yahoo.com',icon:<DeveloperModeIcon/>},
        ]
    },
    {
        tag:'API',
        image:covid,
        title:'COVID-19',
        caption:'Statistics of COVID-19',
        description:'this is project desc',
        links:[
            {link:'https://github.com/durgesh0812/COVID-19APP',icon:<GitHubIcon/>},
            {link:'https://dreamy-wilson-3d854c.netlify.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'API',
        image:ai,
        title:'Echo AI',
        caption:'App works on voice commands',
        description:'App to get recipe of various foods.',
        links:[
            {link:'https://github.com/durgesh0812/PROJECT-1--EDAMAM-Recipe-Search-API-DESIGN',icon:<GitHubIcon/>},
            {link:'https://alan-ai-5c032.web.app/',icon:<DeveloperModeIcon/>},
        ]
    },
    
    ]
}