pages = {

    // The home page
    "greeting": function(){
        greet = "\n\n\n\n\n";
        greet += padString( "The Wumpus Game", 78 ) + "\n\n";
        greet += "\n";
        greet += padString( "Version 0.0", 78 ) + "\n";
        greet += padString( "by Alexandru Pana", 78 ) + "\n";
        greet += padString( "This game is open source and freely distributable!", 78 ) + "\n\n";
        greet += "\n";
        greet += padString( "Help poor children in Uganda!", 78 ) + "\n";
        greet += padString( "type %c(9)help iccf%c(0)       for information               ", 88 ) + "\n";
        greet += "\n";
        greet += padString( "type %c(9)help rules%c(0)      for information about the game", 88 ) + "\n";
        greet += padString( "type %c(9)help actions%c(0)    for a list of commands        ", 88 ) + "\n";
        greet += padString( "type %c(9)start%c(0)           to begin your journey         ", 88 ) + "\n";
        return greet;
    },

    // The ICCF Help page
    "help_iccf": function(){
        iccf = "\n\n\n\n\n\n";
        iccf += padString( "The Wumpus Game is Charityware. You can use and copy it", 78 ) + "\n";
        iccf += padString( "as much as you like, but you are encouraged to make a  ", 78 ) + "\n";
        iccf += padString( "donation the the needy children in Uganda. Please visit", 78 ) + "\n";
        iccf += padString( "the ICCF website, available at these URLS:             ", 78 ) + "\n";
        iccf += "\n";
        iccf += padString( "       %c(5)http://iccf-holland.org                        ", 78 ) + "\n";
        iccf += padString( "       http://www.vim.org/iccf                             ", 78 ) + "\n";
        iccf += padString( "       http://www.iccf.nl%-u%c(0)                          ", 78 ) + "\n";
        iccf += "\n";
        iccf += padString( "Thanks!                                                ", 78 ) + "\n";
        iccf += "\n";
        iccf += padString( "type %c(9)home%c(0)        to return to the home screen", 78 ) + "\n";
        return iccf;
    },

    // The Rules Help page
    "help_rules": function(){
        help = "\n\n\n";
        help += padString( "The Game Rules", 78 ) + "\n";
        help += "\n";
        help += padString( "Page Under Construction", 78 ) + "\n";
        help += "\n";
        help += padString( "type %c(9)home%c(0)               to return to the home screen", 88 ) + "\n";
        return help;
    },

    // The Actions list
    "help_actions": function(){
        result = "\n\n\n\n\n";
        result += padString( "Action List", 78 ) + "\n";
        result += "\n\n";
        result += padString( "     Some actions require a direction.                              ", 78 ) + "\n";
        result += padString( "A direction can be: %c(9)north south east west%c(0)                 ", 88 ) + "\n";
        result += "\n";
        result += padString( "type %c(9)go <direction>%c(0)     to go in the specified direction  ", 88 ) + "\n";
        result += padString( "type %c(9)shoot <direction>%c(0)  to fire an arrow in that direction", 88 ) + "\n";
        result += padString( "type %c(9)grab%c(0)               to grab loot where you find it    ", 88 ) + "\n";
        result += padString( "type %c(9)climb%c(0)              to climb out of the cave          ", 88 ) + "\n";
        result += "\n\n";
        result += padString( "type %c(9)home%c(0)               to return to the home screen      ", 88 ) + "\n";
        return result;
    }
}

function describeEntrance(){
    description = "  ";
    description += "\n\n";
    description += "    You are in a large, sunlight room.\n\n";
    description += "    There are tunnels leading in every direction.\n";
    description += "\n";
    description += "    ~~~  You see the rays shining through the opening.";
    description += "\n\n\n\n\n\n";
    description += "        There is a rope ladder here.\n";
    
    return description;
}

function describe(){
    description = "  ";
    description += "\n\n";
    description += "    You are in a windy room.\n\n";
    description += "    There are tunnels leading in every direction.\n";
    description += "\n";
    description += "    ~~~  You sense a breeze.";
    description += "\n\n\n\n\n\n";
    description += "        It looks like there are markings on the walls.\n";
    description += "        You try to understand their meaning but it seems\n";
    description += "        to be mindless gibberish. Something about a cake.\n";
    description += "        And something about a lie.\n";
    
    return description;
}


