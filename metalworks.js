'use strict';

var items = [
    { GUID: 0, Name: "Widget Maker", Description: "Makes widgets automatically.", UnlockAt: 5, InitialCost: 5, GrowthRate: 1.07, ProductionPerSec: 0.1, Owned: 0, Multiplier: 1 },
    { GUID: 1, Name: "Widget Maker Pro", Description: "Makes widgets faster than a Widget Maker", UnlockAt: 100, InitialCost: 80, GrowthRate: 1.15, ProductionPerSec: 1.2, Owned: 0, Multiplier: 1 },
    { GUID: 2, Name: "Widget Maker 2000", Description: "Makes widgets faster than a Widget Maker Pro!", UnlockAt: 2000, InitialCost: 960, GrowthRate: 1.14, ProductionPerSec: 5.4, Owned: 0, Multiplier: 1 },
    { GUID: 3, Name: "Super Widget Maker", Description: "Makes widgets real fast", UnlockAt: 10000, InitialCost: 11500, GrowthRate: 1.13, ProductionPerSec: 21.5, Owned: 0, Multiplier: 1 },
    { GUID: 4, Name: "Turbo Widget Maker", Description: "TURBO EDITION!!!", UnlockAt: 100000, InitialCost: 140000, GrowthRate: 1.12, ProductionPerSec: 129.3, Owned: 0, Multiplier: 1 },
    { GUID: 5, Name: "Mega Maker", Description: "Mega at making.", UnlockAt: 1000000, InitialCost: 1680000, GrowthRate: 1.11, ProductionPerSec: 776.0, Owned: 0, Multiplier: 1 },
    { GUID: 6, Name: "Make It Faster", Description: "Work it.", UnlockAt: 10000000, InitialCost: 15120000, GrowthRate: 1.10, ProductionPerSec: 5430.6, Owned: 0, Multiplier: 1 },
    { GUID: 7, Name: "Make It Stronger", Description: "Do it.", UnlockAt: 110000000, InitialCost: 136080000, GrowthRate: 1.09, ProductionPerSec: 38014.2, Owned: 0, Multiplier: 1 },
    { GUID: 8, Name: "Widget Worker", Description: "The widget production rate of this device is phenomenal!", UnlockAt: 1100000000, InitialCost: 1224720000, GrowthRate: 1.08, ProductionPerSec: 304113.6, Owned: 0, Multiplier: 1 },
    { GUID: 9, Name: "Widget Worker Pro", Description: "Like a Widget Worker but TO THE MAX!", UnlockAt: 10000000000, InitialCost: 11022480000, GrowthRate: 1.07, ProductionPerSec: 2432908.8, Owned: 0, Multiplier: 1 },
    { GUID: 10, Name: "Super Widget Worker", Description: "Surely the best one yet?", UnlockAt: 90000000000, InitialCost: 99202320000, GrowthRate: 1.06, ProductionPerSec: 21896179.2, Owned: 0, Multiplier: 1 },
    { GUID: 11, Name: "Turbo Widget Worker", Description: "TURBOOOOOOOOOOO!", UnlockAt: 850000000000, InitialCost: 892820880000, GrowthRate: 1.05, ProductionPerSec: 197065612.8, Owned: 0, Multiplier: 1 },
    { GUID: 12, Name: "WIDGET MAX", Description: "It doesn't get better than this.  Literally.", UnlockAt: 8000000000000, InitialCost: 8035387920000, GrowthRate: 1.04, ProductionPerSec: 1773590515, Owned: 0, Multiplier: 1 },
];

var upgrades = [
    { GUID: 0, Name: "Motivational Chat", Description: "Manual labour output is increased by 10%.", UnlockAt: 1000, InitialCost: 1000, GrowthRate: 1.5, Owned: 0, ApplyFunction: upgradeClicker, userData:0 },
    { GUID: 1, Name: "Maker Multiplier", Description: "Widget Maker production rate is increased by 20%.", UnlockAt: 5000, InitialCost: 5000, GrowthRate: 1.49, Owned: 0, ApplyFunction: upgradeItem, userData: 0 },
    { GUID: 2, Name: "Pro-vider", Description: "Widget Maker Pro production rate is increased by 20%.", UnlockAt: 10000, InitialCost: 15000, GrowthRate: 1.48, Owned: 0, ApplyFunction: upgradeItem, userData: 1 },
    { GUID: 3, Name: "2000 x1.2", Description: "Widget Maker 2000 production rate is increased by 20%.", UnlockAt: 20000, InitialCost: 30000, GrowthRate: 1.47, Owned: 0, ApplyFunction: upgradeItem, userData: 2 },
    { GUID: 4, Name: "Super Improvement", Description: "Super Widget Maker production rate is increased by 20%.", UnlockAt: 50000, InitialCost: 50000, GrowthRate: 1.48, Owned: 0, ApplyFunction: upgradeItem, userData: 3 },
    { GUID: 5, Name: "Turbo Timer", Description: "Turbo Widget Maker production rate is increased by 20%.", UnlockAt: 100000, InitialCost: 150000, GrowthRate: 1.47, Owned: 0, ApplyFunction: upgradeItem, userData: 4 },
    { GUID: 6, Name: "MEGA MEGA", Description: "Mega Maker production rate is increased by 20%.", UnlockAt: 2000000, InitialCost: 25000000, GrowthRate: 1.46, Owned: 0, ApplyFunction: upgradeItem, userData: 5 },
    { GUID: 7, Name: "Time Enough", Description: "Make It Faster production rate is increased by 20%.", UnlockAt: 20000000, InitialCost: 21000000, GrowthRate: 1.45, Owned: 0, ApplyFunction: upgradeItem, userData: 6 },
    { GUID: 8, Name: "Daft Upgrade", Description: "Make It Stronger production rate is increased by 20%.", UnlockAt: 150000000, InitialCost: 200000000, GrowthRate: 1.44, Owned: 0, ApplyFunction: upgradeItem, userData: 7 },
    { GUID: 9, Name: "Worker Increase", Description: "Widget Worker production rate is increased by 20%.", UnlockAt: 1500000000, InitialCost: 1750000000, GrowthRate: 1.43, Owned: 0, ApplyFunction: upgradeItem, userData: 8 },
    { GUID: 10, Name: "Pro Increase", Description: "Widget Worker Pro production rate is increased by 20%.", UnlockAt: 15000000000, InitialCost: 20000000000, GrowthRate: 1.42, Owned: 0, ApplyFunction: upgradeItem, userData: 9 },
    { GUID: 11, Name: "SWW-X1.2", Description: "Super Widget Worker production rate is increased by 20%.", UnlockAt: 100000000000, InitialCost: 125000000000, GrowthRate: 1.41, Owned: 0, ApplyFunction: upgradeItem, userData: 10 },
    { GUID: 12, Name: "TWW Upgrade", Description: "Turbo Widget Worker production rate is increased by 20%.", UnlockAt: 950000000000, InitialCost: 1000000000000, GrowthRate: 1.40, Owned: 0, ApplyFunction: upgradeItem, userData: 11 },
];

var prestige = { InitialCost: 150000, GrowthRate: 16.0, Level: 1 };

var achievements = [
    { GUID: 0, Name: "Clicky Finger", Description: "Click 100 times", TestFunction: achieveClick, TestParameter: 100, Achieved: false },
    { GUID: 1, Name: "One Million Widgets", Description: "Manufacture 1 million widgets (all time)", TestFunction: achieveCashAllTime, TestParameter: 1000000, Achieved: false },
    { GUID: 2, Name: "Getting an Upgrade", Description: "Upgrade factory to level 2", TestFunction: achievePrestige, TestParameter: 2, Achieved: false },
    { GUID: 3, Name: "Click To Win", Description: "Click 1,000 times", TestFunction: achieveClick, TestParameter: 1000, Achieved: false },
    { GUID: 4, Name: "Ten Million Widgets", Description: "Manufacture 10 million widgets (all time)", TestFunction: achieveCashAllTime, TestParameter: 10000000, Achieved: false },
    { GUID: 5, Name: "Five Star", Description: "Upgrade factory to level 5", TestFunction: achievePrestige, TestParameter: 5, Achieved: false },
    { GUID: 6, Name: "Taking the Click", Description: "Click 10,000 times", TestFunction: achieveClick, TestParameter: 10000, Achieved: false },
    { GUID: 7, Name: "Billionaire", Description: "Manufacture 1 Billion widgets (all time)", TestFunction: achieveCashAllTime, TestParameter: 1000000000, Achieved: false },
    { GUID: 8, Name: "Fancy Factory", Description: "Upgrade factory to level 10", TestFunction: achievePrestige, TestParameter: 10, Achieved: false },
    { GUID: 9, Name: "x2", Description: "Upgrade anything to a x2 multiplier", TestFunction: achieveMultiplierAny, TestParameter: 2, Achieved: false },
    { GUID: 10, Name: "x5", Description: "Upgrade anything to a x5 multiplier", TestFunction: achieveMultiplierAny, TestParameter: 5, Achieved: false },
    { GUID: 11, Name: "Widget Baron", Description: "Own 50 of any item", TestFunction: achieveOwnedAny, TestParameter: 50, Achieved: false },
    { GUID: 12, Name: "Got a monopoly", Description: "Own 200 of any item", TestFunction: achieveOwnedAny, TestParameter: 200, Achieved: false },
];

var gameTitle = "Widget Factory";
var version = 0.1;
var subversion = 0;
var cash = 0;
var cashAllTime = cash;
var sounds = [];
var lastFrameTime;
var titleUpdateTimer = 0;
var playTime = 0;
var clickData = { Total: 0, Level: 1 };
var muted = false;
var iconFont;
var resetCounter = 0;
var clickerUpgradeLevel = 0;
var helpText = "You should probably click something.";
var helpText2 = "";

function upgradeClicker(i)
{
    clickData.Level *= 1.1;
}

function upgradeItem(i)
{
    items[i].Multiplier *= 1.2;
}

function playSound(soundName)
{
    if (!muted)
    {
        play_sample(sounds[soundName]);
    }
}

function achieveOwnedAny(amount)
{
    var numItems = items.length;
    for (var i = 0; i < numItems; i++)
    {
        if (items[i].Owned >= amount)
        {
            return true;
        }
    }

    return false;
}

function achieveClick(clicks)
{
    return (clickData.Total >= clicks);
}

function achievePrestige(level)
{
    return prestige.Level >= level;
}

function achieveMultiplierAny(amount)
{
    var numItems = items.length;
    for (var i = 0; i < numItems; i++)
    {
        if (items[i].Multiplier >= amount)
        {
            return true;
        }
    }

    return false;
}

function achieveCashAllTime(amount)
{
    if (cashAllTime >= amount)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isMouseOver(x, y, w, h)
{
    return mouse_x >= x && mouse_y >= y && mouse_x <= x + w && mouse_y <= y + h;
}

function fixAndTrim(num, decimals)
{
    return (num.toFixed(decimals)).toString();
}

function getNumString(num)
{
    var currency = " widgets";

    if (num < 1000000)
    {
        return fixAndTrim(num, 1) + currency;
    }
    else if (num < 1000000000)
    {
        return fixAndTrim(num / 1000000, 3) + " million" + currency;
    }
    else if (num < 1000000000000)
    {
        return fixAndTrim(num / 1000000000, 3) + " billion" + currency;
    }
    else if (num < 1000000000000000)
    {
        return fixAndTrim(num / 1000000000000, 4) + " trillion" + currency;
    }
    else
    {
        return fixAndTrim(num / 1000000000000000, 5) + " quadrillion" + currency;
    }
}

function getMultiplierString(num)
{
    return "x" + num;
}

function getNextPrestigeCost()
{
    return Math.ceil(prestige.InitialCost * Math.pow(prestige.GrowthRate, prestige.Level - 1));
}

function resetCash()
{
    cash = 0;
}

function prestigeNow()
{
    var cost = getNextPrestigeCost();
    if (cost <= cashAllTime)
    {
        prestige.Level++;
        playSound("prestige");
    }
}

function resetItems()
{
    var numItems = items.length;
    for (var i = 0; i < numItems; i++)
    {
        items[i].Owned = 0;
        items[i].Multiplier = 1;
    }
    clickData.Level = 1;
}

function getPlayTimeString()
{
    if (playTime < 60)
    {
        return playTime.toFixed(0) + " seconds";
    }
    else if (playTime < 60 * 60)
    {
        return (playTime / (60)).toFixed(1) + " minutes";
    }
    else
    {
        return (playTime / (60 * 60)).toFixed(2) + " hours";
    }
}

function drawAchievements()
{
    var x = 10 + (SCREEN_W / 4) + 10 + (SCREEN_W / 4) + 10;
    var w = SCREEN_W - 10 - x;

    GUI_SetRegion(x, 150, w, SCREEN_H - 160 - 100);
    GUI_Window("Industry Awards");

    var numAchievements = achievements.length;
    for (var a = 0; a < numAchievements; a++)
    {
        var result = gui_result.None;
        if (achievements[a].Achieved)
        {
            if (achievements[a].Timer < 5)
            {
                var c = 64 + 64 * Math.sin(achievements[a].Timer * 10.0);
                GUI_Progress(1.0, makecol(c, c, 0));
            }

            result = GUI_Button(achievements[a].Name);
        }
        else
        {
            result = GUI_ButtonInactive(achievements[a].Name);
        }

        if (result != gui_result.None)
        {
            helpText = achievements[a].Name;
            if (achievements[a].Achieved)
            {
                helpText += " (awarded)";
            }
            helpText2 = achievements[a].Description;
        }
    }
}

function getClickCash()
{
    return clickData.Level;
}

function getClicksForNextLevel()
{
    return Math.floor(Math.pow(clickData.Base, clickData.Level * clickData.Power));
}

function doClick()
{
    var amount = getClickCash();

    cash += amount;
    cashAllTime += amount;

    clickData.Total++;
}

function drawMute()
{
    rect(canvas, 30 - 8, 24 - 16, 32, 32, makecol(255, 255, 0));

    if (!muted)
    {
        textout_centre(canvas, iconFont, String.fromCharCode(0xE050), 30 - 8 + 16, 24 - 16 + 28, 24, makecol(255, 255, 0));
    }
    else
    {
        textout_centre(canvas, iconFont, String.fromCharCode(0xE04F), 30 - 8 + 16, 24 - 16 + 28, 24, makecol(255, 255, 0));
    }

    if (mouse_pressed)
    {
        if (isMouseOver(30 - 8, 24 - 16, 32, 32))
        {
            muted = !muted;
        }
    }
}

function getNextClickerUpgradeCost()
{
    return Math.pow(10, clickerUpgradeLevel) * 1000000;
}

function drawVersion()
{
    textout_right(canvas, font, "v." + version.toFixed(1) + "." + subversion, SCREEN_W - 10, 10, 10, makecol(255, 255, 0));
}

function drawTotal()
{
    textout_centre(canvas, font, getNumString(Math.floor(cash)), SCREEN_W / 2, 40, 24, makecol(255, 255, 0));
}

function drawPlaytime()
{
    textout_centre(canvas, font, "Production running for " + getPlayTimeString(), SCREEN_W / 2, 56, 10, makecol(255, 255, 0));
}

function drawManufacture()
{
    var total = getItemProductionTotal();
    textout_centre(canvas, font, "Manufactured " + getNumString(Math.floor(cashAllTime)) + "   Production:" + getNumString(total) + "/sec", SCREEN_W / 2, 66, 10, makecol(255, 255, 0));
}

function drawClicker()
{
    GUI_SetRegion(10, 80, SCREEN_W / 4, 50);
    GUI_Window("Manual Labour");
    var result = GUI_Button("Make Widgets");

    if (result != gui_result.None)
    {
        helpText = "Click to make widgets all by yourself.  Aren't you clever?"
        helpText2 = "Makes " + getNumString(getClickCash()) + " per click.  You have clicked " + clickData.Total + " times.";

        if (result == gui_result.Click)
        {
            playSound("click");
            doClick();
        }
    }
}

function drawPrestige()
{
    GUI_SetRegion(10 + (SCREEN_W / 4) + 10, 80, SCREEN_W / 4, 50);
    GUI_Window("Factory Upgrade");
    var result;
    var cost = getNextPrestigeCost();

    var prop = cashAllTime / cost;
    if (prop > 1) prop = 1;
    GUI_Progress(prop, makecol(64, 64, 0));

    if (cashAllTime < cost)
    {
        result = GUI_ButtonInactive("Upgrade");
    }
    else
    {
        result = GUI_Button("Upgrade");
    }

    if (result != gui_result.None)
    {
        helpText = "Upgrade your factory.  Increases all productivity except manual labour."
        helpText2 = "Current Level: " + prestige.Level + " Unlocks At: " + getNumString(cost) + " (all time).";

        if (result == gui_result.Click)
        {
            prestigeNow();

            playSound("click");
        }
    }
}

function getItemCost(i)
{
    return Math.ceil(items[i].InitialCost * Math.pow(items[i].GrowthRate, items[i].Owned));
}

function getUpgradeCost(i)
{
    return Math.ceil(upgrades[i].InitialCost * Math.pow(upgrades[i].GrowthRate, upgrades[i].Owned));
}

function round(value, precision)
{
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function getItemProduction(i)
{
    return round(items[i].ProductionPerSec * items[i].Multiplier * items[i].Owned * prestige.Level, 1);
}

function getItemProductionTotal()
{
    var total = 0;
    var numItems = items.length;
    for (var i = 0; i < numItems; i++)
    {
        total += getItemProduction(i);
    }

    return total;
}

function drawItems()
{
    GUI_SetRegion(10, 150, SCREEN_W / 4, SCREEN_H - 160 - 100);
    GUI_Window("Automation");

    var numItems = items.length;
    for (var i = 0; i < numItems; i++)
    {
        if (cashAllTime >= items[i].UnlockAt)
        {
            var cost = getItemCost(i);
            var total = getItemProductionTotal();
            var prod = getItemProduction(i);
            var perc = round((prod / total) * 100, 2);
            if (total == 0) perc = 0;
            var text1 = items[i].Description + "  Multiplier: x" + items[i].Multiplier + "  (" + perc + " % of total)";
            var text2 = "Cost: " + getNumString(cost) + "  Owned: " + items[i].Owned + "  Production: " + getNumString(prod) + "/sec"; 

            var prop = cash / cost;
            if (prop > 1) prop = 1;

            GUI_Progress(prop, makecol(64,64,0));

            if (cost <= cash)
            {
                var result = GUI_Button(items[i].Name);

                if (result != gui_result.None)
                {
                    helpText = text1;
                    helpText2 = text2;

                    if (result == gui_result.Click)
                    {
                        playSound("click");
                        cash -= cost;
                        items[i].Owned += 1;
                    }
                }
            }
            else
            {
                var result = GUI_ButtonInactive(items[i].Name);
                if (result != gui_result.None)
                {
                    helpText = text1;
                    helpText2 = text2;
                }
            }
        }
    }

}

function drawHelp()
{
    GUI_SetRegion(10, SCREEN_H - 90, SCREEN_W - 20, 80);
    GUI_Window("Information");
    GUI_Text(helpText);
    GUI_Text(helpText2);
}

function drawUpgrades()
{
    GUI_SetRegion(10 + (SCREEN_W / 4) + 10, 150, SCREEN_W / 4, SCREEN_H - 160 - 100);
    GUI_Window("Upgrades");

    var numUpgrades = upgrades.length;
    for (var i = 0; i < numUpgrades; i++)
    {
        if (cashAllTime >= upgrades[i].UnlockAt)
        {

            var cost = getUpgradeCost(i);
            var result = gui_result.None;

            var prop = cash / cost;
            if (prop > 1) prop = 1;
            GUI_Progress(prop, makecol(64, 64, 0));

            if (cost > cash)
            {
                result = GUI_ButtonInactive(upgrades[i].Name);
            }
            else
            {
                result = GUI_Button(upgrades[i].Name);
            }

            if (result == gui_result.Hover || result == gui_result.Click)
            {
                helpText = upgrades[i].Name + " (cost: " + getNumString(getUpgradeCost(i)) + ")";
                helpText2 = upgrades[i].Description;
            }

            if (cost <= cash)
            {
                if (result == gui_result.Click)
                {
                    playSound("click");
                    cash -= cost;
                    upgrades[i].ApplyFunction(upgrades[i].userData);
                    upgrades[i].Owned += 1;
                }
            }
        }
    }
}

function draw()
{
    helpText = "You should probably click something.  Hover over an item for more information.";
    helpText2 = "";

    GUI_Begin();

    drawVersion();
    drawMute();
    drawTotal();
    drawPlaytime();
    drawManufacture();
    drawClicker();
    drawPrestige();
    drawItems();
    drawUpgrades();
    drawAchievements();
    drawHelp();
}

function localStorageAvailable()
{
    return typeof (Storage) !== "undefined";
}

Storage.prototype.setObj = function (key, obj)
{
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key)
{
    return JSON.parse(this.getItem(key))
}

function saveAchievements()
{
    var saveData = [];
    var numAchievements = achievements.length;

    for (var a = 0; a < numAchievements; a++)
    {
        saveData[a] = { GUID: achievements[a].GUID, Achieved: achievements[a].Achieved };
    }

    localStorage.setObj("achievements", saveData);
}

function loadAchievements()
{
    var saveData = localStorage.getObj("achievements");
    if (saveData != null)
    {
        var numData = saveData.length;
        var numAchievements = achievements.length;

        for (var d = 0; d < numData; d++)
        {
            for (var a = 0; a < numAchievements; a++)
            {
                if (achievements[a].GUID == saveData[d].GUID)
                {
                    achievements[a].Achieved = saveData[d].Achieved;
                    break;
                }
            }
        }
    }
}

function save()
{
    return;

    if (localStorageAvailable())
    {
        localStorage.setObj("version", version);
        localStorage.setObj("cash", cash);
        localStorage.setObj("cashAllTime", cashAllTime);
        localStorage.setObj("prestigeLevel", prestigeLevel);
        localStorage.setObj("playTime", playTime);
        saveAchievements();
        localStorage.setObj("clickData", clickData);
    }
}

function load()
{
    return;

    if (localStorageAvailable())
    {
        var v = localStorage.getObj("version");

        if (v == null)
        {
            resetAll();
        }
        else
        {
            cash = localStorage.getObj("cash");
            cashAllTime = localStorage.getObj("cashAllTime");
            prestigeLevel = localStorage.getObj("prestigeLevel");
            playTime = localStorage.getObj("playTime");
            loadAchievements();
            clickData = localStorage.getObj("clickData");
        }

    }
}

function updateAchievements(dt)
{
    var numAchievements = achievements.length;
    for (var a = 0; a < numAchievements; a++)
    {
        if (!achievements[a].Achieved)
        {
            achievements[a].Achieved = achievements[a].TestFunction(achievements[a].TestParameter);

            if (achievements[a].Achieved)
            {
                playSound("achievement");
                achievements[a].Timer = 0;
            }
        }
        else
        {
            achievements[a].Timer += dt;
        }
    }
}

function update()
{
    var timeNow = Date.now();
    var elapsed = (timeNow - lastFrameTime) / 1000.0;

    playTime += elapsed;

    var numItems = items.length;

    for (var i = 0; i < numItems; i++)
    {
        var production = getItemProduction(i) * elapsed;
        cash += production;
        cashAllTime += production;
    }

    lastFrameTime = timeNow;

    titleUpdateTimer += elapsed;
    if (titleUpdateTimer >= 2.0)
    {
        save();
        document.title = getNumString(Math.floor(cash)) + " - " + gameTitle;
        titleUpdateTimer = 0;
    }

    updateAchievements(elapsed);
}

function resetAchievements()
{
    var numAchievements = achievements.length;
    for (var a = 0; a < numAchievements; a++)
    {
        achievements[a].Achieved = false;
    }
}

function resetClickData()
{
    clickData.Total = 0;
    clickData.Level = 1;
    clickData.Base = 10;
    clickData.Power = 0.25;
    clickerUpgradeLevel = 0;
}

function resetAll()
{
    resetCash();
    resetAchievements();
    resetItems();
    resetClickData();
    cashAllTime = cash;
    prestige.Level = 1;
    playTime = 0;
}

function loadSounds()
{
    sounds["click"] = load_sample("data/click.wav");
    sounds["prestige"] = load_sample("data/prestige.wav");
    sounds["reset"] = load_sample("data/reset.wav");
    sounds["achievement"] = load_sample("data/au.wav");
}

function main()
{
    resetAll();
    load();

    enable_debug('debug');
    allegro_init_all("game_canvas", 800, 600);
    font = create_font('Share Tech Mono');
    iconFont = create_font('Material Icons');

    loadSounds();

    ready(function ()
    {
        lastFrameTime = Date.now();
        loop(function ()
        {
            clear_to_color(canvas, makecol(0, 0, 64));
            update();
            draw();
        }, BPS_TO_TIMER(60));
    });
    return 0;
}
END_OF_MAIN();

