/**
 * Created by jianwu.zhang on 2015/12/26.
 */


setImmediate(function(){
    'use strict';
    console.log('setImmediate delay 1');

    setImmediate(function(){
        console.log('setImmediate delay in immediate 1');
    });

    process.nextTick(function(){
        console.log('nextTick delay in immediate 1');
    });
});


setImmediate(function(){
    'use strict';
    console.log('setImmediate delay 2');

    setImmediate(function(){
        console.log('setImmediate delay in immediate 2');
    });

    process.nextTick(function(){
        console.log('nextTick delay in immediate 2');
    });
});

process.nextTick(function(){
    'use strict';
    console.log('nextTick delay 1');
});

process.nextTick(function() {
    'use strict';
    console.log('nextTick delay 2');
});

console.log("run in order!");