angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("templates/filter.html","<md-bottom-sheet class=\'md-grid\' style=\'padding-bottom:200px;\'>\n    <md-list>\n        <md-item>\n            <p>Tal plays</p>\n            <md-radio-group ng-model=\'playerColor.value\'>\n                <md-radio-button\n                    value=\'white\'\n                    aria-label=\'White\'>\n                    White\n                </md-radio-button>\n\n                <md-radio-button\n                    value=\'black\'\n                    aria-label=\'Black\'>\n                    Black\n                </md-radio-button>\n\n                <md-radio-button\n                    value=\'either\'\n                    aria-label=\'Either\'>\n                    Either\n                </md-radio-button>\n            </md-radio-group>\n        </md-item>\n    </md-list>\n</md-bottom-sheet>\n");
$templateCache.put("templates/introduction.html","<h1>Welcome</h1>\n<p>\n<em>Play Like Tal</em> is a tool for aiding you in learning to play like the late Latvian \nGrandmaster <em><a href=\'http://en.wikipedia.org/wiki/Mikhail_Tal\' target=\'_blank\'>Mikhail Tal</a></em>.\n</p>\n\n<p>\nTal was the eighth World Chess Champion (1960&ndash;1961). He is widely regarded as the best \nattacking player of all time. If you\'d like to test yourself to see if you can <em>Play Like Tal</em>,\nselect a game from the menu and get started.\n</p>\n");
$templateCache.put("directives/chessboard/chessboard.html","<md-content layout-fill>\n    <section layout=\'column\' layout-align=\'center center\'>\n        <h2>{{gameInformation.white}} vs {{gameInformation.black}}</h2>\n    </section>\n\n    <section layout=\'column\' layout-align=\'center center\' layout-fill>\n        <!-- board will be appended inside here -->\n        <div id=\'board-container\'></div>\n    </section>\n\n    <section layout=\'row\' layout-align=\'center center\'>\n        <md-button\n            class=\'md-raised md-primary\'\n            style=\'margin: 10px 5px 0 0;\'\n            ng-click=\'doNextMove()\'\n        >Show Move</md-button>\n\n        <md-button\n            class=\'md-raised md-primary\'\n            style=\'margin: 10px 0 0 5px\'\n            ng-click=\'showHint()\'\n        >Show Hint</md-button>\n    </section>\n</md-content>\n");
$templateCache.put("directives/sidebar/sidebar.html","    <md-toolbar>\n        <h1 class=\'md-toolbar-tools\'>Play Like Tal</h1>\n    </md-toolbar>\n\n    <md-content flex stle=\'overflow: auto;\'>\n        <md-list>\n            <md-item>game</md-item>\n        </md-list>\n    </md-content>\n\n");}]);