Just another compact library-agnostic Pub/Sub implementation.

### Usage

```javascript
	var testSubscriber = function( topics , data ){
	    console.log( topics + ": " + data );
	};

	var testSubscription = pubsubz.subscribe( 'example1', testSubscriber );

	pubsubz.publish( 'example1', 'hello world!' );
	pubsubz.publish( 'example1', ['test','a','b','c'] );
	pubsubz.publish( 'example1', [{'color':'blue'},{'text':'hello'}] );

	setTimeout(function(){
	    pubsubz.unsubscribe( testSubscription );
	}, 0);

	pubsubz.publish( 'example1', 'hello again!' );
```