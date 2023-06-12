const Router = {
    routes: [],

    addRoute: function(route, action) {
        this.routes.push({route, action});
    },

    navigate: function(url) {
        window.history.pushState(null, null, url);
        this.handleUrlChange();
    },

    handleUrlChange: function() {
        const currentUrl = window.location.pathname;

        for(const {route, action} of this.routes) {
            if(route === currentUrl) {
                action();
                break;
            }
        }
    }
};

window.addEventListener('popstate', () => Router.handleUrlChange());

export { Router };
