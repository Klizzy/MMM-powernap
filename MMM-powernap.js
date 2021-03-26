/* global Module */

/* Magic Mirror
 * Module: MMM-powernap
 *
 * By Steven Zemelka
 * MIT Licensed.
 */

Module.register("MMM-powernap", {
    defaults: {
        updateInterval: 5000,
        retryDelay: 5000,
        icon: 'bed',
        message: 'Powernap in progress!',
    },

    requiresVersion: "2.1.0",

    start: function () {
        this.loaded = false;
        this.sendSocketNotification("MMM-powernap-INITIALIZED", "Plugin can receive now requests");
        this.loaded = true;
    },

    getDom: function () {
        return document.createElement("div");
    },

    getStyles: function () {
        return [
            "MMM-powernap.css",
        ];
    },

    socketNotificationReceived: function (notification) {
        if (notification === "MMM-powernap-SHOW-NAP-NOTICE") {
            this.sendNotification("SHOW_ALERT", {message: this.config.message, imageFA: this.config.icon});
        }
        if (notification === "MMM-powernap-REMOVE-NAP-NOTICE") {
            this.sendNotification("HIDE_ALERT");
        }
    },
});
