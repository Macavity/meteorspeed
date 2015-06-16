Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc){
        // only allow if a user is logged in
        return !! userId;
    }
});