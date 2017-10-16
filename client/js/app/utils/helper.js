export default {
    rando : function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },
    getTime : function() {
        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var d = new Date();
        var mon = month[d.getMonth()];
        var day = d.getDate();
        var year = d.getFullYear();
        var dateAll = mon + " " + day + ", " + year;

        return dateAll;
    },
    getTaggedName : function() {
        var adjectives = ['trusted', 'secure', 'hot', 'new', 'interesting', 'best practice', 'exciting'];

        var nouns = ['es6', 'browserify', 'webpack', 'gulp', 'reactDOM', 'devTools'];

        return this.rando(adjectives) + ' ' + this.rando(nouns);
    }
}
