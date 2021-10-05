//IIFE (Immediately Invoked Function Expression) keeps variables constrained to the scope of this function.

(function() {

    //Package data and constructor objects

    var data = [
        {
            name: 'GitLens',
            description: 'Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.',
            author: 'Eric Amodio',
            downloads: 10965711,
            stars: 463,
            selector: 'p1'
        },
        {
            name:'Path Intellisense',
            description:'Visual Studio Code plugin that autocompletes filenames.',
            author: 'Christian Kohler',
            downloads: 5512433,
            stars: 93,
            selector: 'p2'
        },
                {
            name:'Rainbow Brackets',
            description:'A rainbow brackets extension for VS Code.',
            author: '2gua',
            downloads: 1058196,
            stars: 72,
            selector: 'p3'
        }

    ];

    //Package constructor function
    function Package(data){ //Constructor functions (e.g "Package") are capitalized.
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        //Formatting (commas) to large numbers
        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function(){
            return this.stars.toLocaleString();
        };
    }

    //Utility Functions

    //Returns today's date, formatted
    var getTodaysDate = function(){
        var today = new Date();
        return today.toDateString();
    };

    //Returns DOM element by id
    var getEl = function (id){
        return document.getElementById(id);
    };

    var writePackageInfo = function(package){ //"package" parameter is just naming the object -- not a reference to Package constructor
        //Get reference to the DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

    //Writing package to DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
    };

    /*Utilizing package data and constructor objects to 
    *construct each package, then add package data to
    *the page via DOM functions*/

    //Write date
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //Write package data one-by-one
    var GitLens = new Package(data[0]);
    writePackageInfo(GitLens);
    var PathIntellisense = new Package(data[1]);
    writePackageInfo(PathIntellisense);
    var RainbowBrackets = new Package(data[2]);
    writePackageInfo(RainbowBrackets);


}());