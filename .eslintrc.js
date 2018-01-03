module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "indent": ["error", 4],
        "react/jsx-indent": [4, 4],
        "react/jsx-indent-props": [4, 4],
        "react/no-did-mount-set-state": [false]
    },
    "env": {
        "browser": true,
        "node": true
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.2.0"
        }
    }
};
