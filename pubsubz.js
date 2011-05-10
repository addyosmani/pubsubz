/*http://jsfiddle.net/vkVLk/3/*/
/*http://jsfiddle.net/vkVLk/4/*/
/*http://jsfiddle.net/vkVLk/6/*/
var pubsubz = {};
(function(q){
    
    var topics = {},
        subUid = -1,

    publish = function( topic , args ){
        if ( !topics.hasOwnProperty( topic ) ){
            return false;
        }
        
        setTimeout( function(){
           var subscribers = topics[topic];
           for ( var i = 0, j = subscribers.length; i < j; i++ ){
                    subscribers[i].func( topic, args );
            }
        } , 0 );
        
        return true;
    };

    q.publish = function( topic , args ){
        return publish( topic, args, false );
    };
    
    q.subscribe = function( topic, func ){
        if ( !topics.hasOwnProperty( topic ) ){
                topics[topic] = [];
            }

        var token = (++subUid).toString();
        topics[topic].push( { token : token, func : func } );
        return token;
    };

    q.unsubscribe = function( token ){
        for ( var m in topics ){
            if ( topics.hasOwnProperty( m ) ){
                for ( var i = 0, j = topics[m].length; i < j; i++ ){
                    if ( topics[m][i].token === token ){
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return false;
    };
}(pubsubz));
//
