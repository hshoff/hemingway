//
// Copyright (c) 2011 Frank Kohlhepp
// https://github.com/frankkohlhepp/fancy-settings
// License: LGPL v2.1
//
(function () {
    this.Search = new Class({
        "index": [],
        "groups": {},

        "initialize": function (search, searchResultContainer) {
            var setting;
            var find;

            this.search = search;
            this.searchResultContainer = searchResultContainer;
            this.setting = new Setting(new Element("div"));

            // Create setting for message "nothing found"
            setting = new Setting(this.searchResultContainer);
            this.nothingFound = setting.create({
                "type": "description",
                "text": (i18n.get("nothing-found") || "No matches were found.")
            });
            this.nothingFound.bundle.set("id", "nothing-found");

            // Create event handlers
            find = event => {
                this.find(event.target.get("value"));
            };

            this.search.addEvent("keyup", event => {
                if (event.key === "esc") {
                    this.reset();
                } else {
                    find(event);
                }
            });
            this.search.addEventListener("search", find, false);
        },

        "bind": function (tab) {
            tab.addEvent("click", this.reset.bind(this));
        },

        "add": function (setting) {
            var searchSetting = this.setting.create(setting.params);
            setting.search = searchSetting;
            searchSetting.original = setting;
            this.index.push(searchSetting);

            setting.addEvent("action", (value, stopPropagation) => {
                if (searchSetting.set !== undefined && stopPropagation !== true) {
                    searchSetting.set(value, true);
                }
            });
            searchSetting.addEvent("action", value => {
                if (setting.set !== undefined) {
                    setting.set(value, true);
                }
                setting.fireEvent("action", [value, true]);
            });
        },

        "find": function (searchString) {
            // Exit search mode
            if (searchString.trim() === "") {
                document.body.removeClass("searching");
                return;
            }

            // Or enter search mode
            this.index.each(setting => { setting.bundle.dispose(); });
            Object.each(this.groups, group => { group.dispose(); });
            document.body.addClass("searching");

            // Filter settings
            var result = this.index.filter(setting => {
                if (setting.params.searchString.contains(searchString.trim().toLowerCase())) {
                    return true;
                }
            });

            // Display settings
            result.each(setting => {
                var group;
                var row;

                // Create group if it doesn't exist already
                if (this.groups[setting.params.group] === undefined) {
                    this.groups[setting.params.group] = (new Element("table", {
                        "class": "setting group"
                    })).inject(this.searchResultContainer);

                    group = this.groups[setting.params.group];
                    row = (new Element("tr")).inject(group);

                    (new Element("td", {
                        "class": "setting group-name",
                        "text": setting.params.group
                    })).inject(row);

                    group.content = (new Element("td", {
                        "class": "setting group-content"
                    })).inject(row);
                } else {
                    group = this.groups[setting.params.group].inject(this.searchResultContainer);
                }

                setting.bundle.inject(group.content);
            });

            if (result.length === 0) {
                this.nothingFound.bundle.addClass("show");
            } else {
                this.nothingFound.bundle.removeClass("show");
            }
        },

        "reset": function () {
            this.search.set("value", "");
            this.search.blur();
            this.find("");
        }
    });
}());
