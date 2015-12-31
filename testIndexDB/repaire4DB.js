/**
 * Created by jianwu.zhang on 2015/12/31.
 */
(function(){
    'use strict';

    var getIndexDB = function() {
        var indexedDB = window.indexedDB || window.msIndexedDB;
        if (indexedDB) {
            return indexedDB;
        }
        else {
            window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
        }
    };

    var user_tom = {
        userId: "N0001",
        username: "Tom",
        password: "password_tom"
    };

    var editTuser = function(dataBase){
        if (!dataBase) {return;}

        var t_user;
        if (!dataBase.objectStoreNames.contains('t_user')) {
            t_user = dataBase.createObjectStore("t_user", {keyPath: "userId"});
        }
        else {
            t_user = dataBase.transaction('t_user');
        }

        var request = t_user.add(user_tom);
        request.onsuccess = function(e){
            console.log("insert success:" + e.target);
        };
        request.onerror = function(e){
            console.log("insert error:" + e.target);
        };
    };

    var openDB = function(user_tom, dbName, version){

        var myIDB = getIndexDB();
        var db = myIDB.open(dbName, version);
        db.onerror = function(e){
            console.log("Something bad happened while trying to open:" + e.target.errorCode);
        };
        db.onsuccess = function(e){
            var dataBase = e.target.result;
            console.log("connect DB success! DBName: " + dataBase.name + "_" + dataBase.version);
            //if (dataBase.version !== version) {
            //    var request_SetVersion = dataBase.setVersion(version);
            //    request_SetVersion.onerror = function () {
            //        console.log("SetVersion error!");
            //    };
            //
            //    request_SetVersion.onsuccess = function () {
            //        console.log("SetVersion success! version: " + dataBase.version);
            //        editTuser(dataBase);
            //    };
            //}
            //else {
            //    console.log("DateBase already initialized. DBName: " + dataBase.name + "_" + dataBase.version);
            //    editTuser(dataBase);
            //}

            editTuser(dataBase);
        };
    };

    openDB(user_tom, "testIDB", "1.0");
})();
