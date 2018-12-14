module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "babel"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "classProperties": true
        }
    },
    "extends": "airbnb",
    "globals": {
        "window": true,
        "document": true,
        "_global": true,
        "describe": true,
        "it": true,
        "beforeEach": true,
        "afterEach": true,
        "expect": true,
        "jest": true
    },
    "rules": {
        "eqeqeq": "off",
        "indent": [
            "error",
            4, 
            {
                "SwitchCase": 1,
                "flatTernaryExpressions": true
            }
        ],
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "react/prop-types": [0],
        "no-underscore-dangle": [0],
        "class-methods-use-this": [0],
        "react/jsx-indent": [4, 4],
        "react/jsx-indent-props": [4, 4],
        "jsx-a11y/alt-text": [0],
        "jsx-a11y/label-has-for": [0],
        "jsx-a11y/anchor-is-valid": [0],
        "no-script-url": [0],
        "max-len": ["error", {"code": 120}],
        "jsx-a11y/click-events-have-key-events": [0],
        "no-param-reassign": 0,
        "no-unused-expressions": 0,
        "react/forbid-prop-types": 0,
        "jsx-a11y/no-static-element-interactions": [0],
        "eqeqeq": 0,
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "webpack.common.js"
            },
            "jest": {
                "jestConfigFile": "./jest.conf.js"
            }
        },
    }
};