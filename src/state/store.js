const Store = {
    state: {},

    getState: function() {
        return this.state;
    },

    setState: function(newState) {
        this.state = {...this.state, ...newState};
    }
};

export { Store };
