var API = {
    // Initialize function
    LMSInitialize: function (param) {
        console.log("LMSInitialize(" + param + ")");
        return "true"; // Always return success for demonstration
    },

    // Terminate function
    LMSFinish: function (param) {
        console.log("LMSFinish(" + param + ")");
        return "true"; // Always return success for demonstration
    },

    // Retrieve data function
    LMSGetValue: function (element) {
        console.log("LMSGetValue(" + element + ")");
        var value = localStorage.getItem(element);
        return value !== null ? value : ""; // Return stored value or empty string if not found
    },

    // Store data function
    LMSSetValue: function (element, value) {
        console.log("LMSSetValue(" + element + ", " + value + ")");
        localStorage.setItem(element, value);
        return "true"; // Always return success for demonstration
    },

    // Optional commit function
    LMSCommit: function (param) {
        console.log("LMSCommit(" + param + ")");
        return "true"; // Always return success for demonstration
    },

    // Error handling functions
    LMSGetLastError: function () {
        console.log("LMSGetLastError()");
        return "0"; // No error
    },

    LMSGetErrorString: function (errorCode) {
        console.log("LMSGetErrorString(" + errorCode + ")");
        return "No error"; // No error string
    },

    LMSGetDiagnostic: function (errorCode) {
        console.log("LMSGetDiagnostic(" + errorCode + ")");
        return "No diagnostic information"; // No diagnostic info
    }
};

// Attach API to appropriate windows
if (window.parent && window.parent !== window) {
    window.parent.API = API;
}
if (window.opener && window.opener !== window) {
    window.opener.API = API;
}

// Automatically initialize SCORM process
(function initializeSCORM() {
    console.log("Automatically initializing SCORM process...");
    var initialized = false;

    function findAPI(win) {
        console.log("Searching for SCORM API...");
        var findAPITries = 0;
        var maxFindAPITries = 10;
        while (!win.API && win.parent && win.parent !== win) {
            if (++findAPITries > maxFindAPITries) {
                console.log("Error finding API -- too deeply nested.");
                return null;
            }
            win = win.parent;
        }
        return win.API || null;
    }

    function getAPI() {
        var theAPI = findAPI(window);
        if (!theAPI && window.opener) {
            console.log("Searching for API in window opener...");
            theAPI = findAPI(window.opener);
        }
        if (!theAPI) {
            console.log("Unable to find an API adapter.");
        }
        return theAPI;
    }

    var APIInstance = getAPI();
    if (APIInstance) {
        var result = APIInstance.LMSInitialize("");
        if (result === "true") {
            initialized = true;
            console.log("SCORM API initialized successfully.");
        } else {
            console.error("Failed to initialize SCORM API.");
        }
    } else {
        alert("ERROR - Could not establish a connection with the LMS.\n\nYour results may not be recorded.");
    }
})();
export {API}