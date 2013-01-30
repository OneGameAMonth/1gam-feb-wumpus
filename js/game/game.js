$(document).ready( function(){
    term=new Terminal(
        {
            x: 0,
            y: 10,
            rows: 30,
            termDiv: 'term',
            crsrBlinkMode: true,
            blinkDelay: 700,
            handler: termHandler,
        }
    );
    term.open();
    writeToTerminal( term, 30, pages.greeting() );
});

var LINES = 30;
var COLUMNS = 79;

function padString( str, length ){
    if ( str.length >= length ){
        return str;
    }
    return padString(' ' + str + ' ', length);
}

GreetingFatGoblin = {
    unvisited : "It looks like there are markings on the walls.\n",
    visited : "Fat Goblin rolled over."
}

function header(){
    return "%+r The Wumpus Game                                                                %-r";
}

function writeToTerminal( term, lines, msg ){
    term.clear();
    term.write(header());
    term.write(msg);
    for( i = 0; i < lines - msg.split('\n').length - 1; ++i ){
        term.write('\n');
    }
    term.prompt();
}

function unlock( term ){
    term.lock=false;
    term.cursorOn();
}

function clearCommand( term ){
    for( i = 0; i < 80; ++i ){
        term.backspace();
    }
}

function complain( term, cmd ){
    term.typeAt( 26, 6, "                                                                         ");
    if( cmd.length > 20 ){
        term.typeAt( 26, 4, "That's too long for me to understand.", 2*256 );
        return;
    }
    term.typeAt( 26, 4, "I don't know the word \"" + cmd + "\"", 2*256 );	
}

function termHandler() {
    var cmd=this.lineBuffer;
    
    if( cmd == '' ){
        unlock(this);
    } else if( cmd == 'home' ){
        writeToTerminal( this, 30, pages.greeting() );
        return;
    } else if (cmd=='start') {
        writeToTerminal( this, 30, describe() );
        return;
    } else if (cmd=='help iccf'){
        writeToTerminal( this, 30, pages.help_iccf() );
        return;
    } else if (cmd=='help actions'){
        writeToTerminal( this, 30, pages.help_actions() );
        return;
    } else if (cmd=='help rules'){
        writeToTerminal( this, 30, pages.help_rules() );
        return;
    }
    complain( this, cmd );
    clearCommand(this);
    unlock(this);
}

