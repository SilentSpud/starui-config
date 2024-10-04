window.alternateOSDataPackages = {};
window.alternateOSDataPackages['StarUI HUD'] = { json : {
    "modName": "StarUI HUD",
    "author": "m8r98a4f2",
    "displayName": "StarUI HUD",
    "iniFileDefault": "Interface\\StarUI HUD (default).ini",
    "iniFile": "Interface\\StarUI HUD.ini",
    "teaserImage": "config.images/HUD/StarUI_Hud_Teaser.jpg",
    "version": 1,
    "pages": [
        {
            "pageDisplayName": "Basic settings",
            "content": [
                { "type" : "section", "text" : "Basic settings" }
                ,{ "type": "textinput", "text": "Default HUD color", "help": "Default HUD color (may be overridden by a elements special color)", "id": "sHudDefaultColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": "Hard drop-down-shadows", "help": "Use hard drop-down-shadows instead of soft ones", "id": "bHudHardDropDownShadow:StarUI HUD"}
                ,{ "type": "switcher", "text": "Preventing accidental steals", "help": "Preventing accidental steals. You need to sneak to to steal.", "id": "bHudPreventStealAccident:StarUI HUD"}
                ,{ "type": "switcher", "text": " - Allow stealing of mines", "help": "Always allow stealing of mines. Better to steal than to explode!", "id": "bHudPreventStealAccidentIgnoreMines:StarUI HUD"}
                ,{ "type" : "section", "text" : "Item marker circle / leading line" }
                ,{ "type": "text", "html":true,"text": "<font color='#aaaaaa'>This is the circle on objects in the world you are looking at\nNote: When using the new TagLabel it's recommended to it disabled.Enable or disable the line from the item marker (circle) to other elements for different types of viewed element when viewing...\n</font>"}
                ,{ "type": "switcher", "text": "...a generic entity (bed, chair,...)", "help": "...when viewing a generic entity (bed, chair,...)", "id": "bHudReticleLineForGeneric:StarUI HUD"}
                ,{ "type": "switcher", "text": "...item without item card", "help": "...when viewing an item without item card (late game)", "id": "bHudReticleLineForSingleItem:StarUI HUD"}
                ,{ "type": "switcher", "text": "...item with item card", "help": "...when viewing an item with item card", "id": "bHudReticleLineForSingleItemWithItemCard:StarUI HUD"}
                ,{ "type": "switcher", "text": "...item with an inventory", "help": "...when viewing a inventory", "id": "bHudReticleLineForLootList:StarUI HUD"}
                ,{ "type": "textinput", "text": "Item marker circle and line color", "help": "Colorize your item marker circle (and line)", "id": "sHudReticleColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Steal color", "help": "", "id": "sHudReticleStealColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type" : "section", "text" : "Item Label (vanilla)" }
                ,{ "type": "textinput", "text": "Item label box Color", "help": "The white box you see mostly in Vanilla and Vanilla Extended when hovering things without item cards", "id": "sLabelColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Steal color", "help": "", "id": "sLabelStealColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Contraband color", "help": "", "id": "sLabelContrabandColor:StarUI HUD", "typeSpecial" : "color"}

                ,{ "type" : "section", "text" : "Big Door" }
                ,{ "type": "switcher", "text": "Enables Big Door icon indicator", "help": "Enables a big door icon indicator when you look at a door which leads to other areas/cells (part of Tag Lable)", "id": "bHudEnableBigDoorIcon:StarUI HUD"}
                ,{ "type": "textinput", "text": "Big Door color", "help": "Colorize the door icon", "id": "sHudBigDoorColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type" : "section", "text" : "Button bar" }
                ,{ "type": "switcher", "text": "Smaller buttons", "help": "Smaller buttons for the button bar", "id": "bButtonBarSmallerButtons:StarUI HUD"}
                ,{ "type": "textinput", "text": "Button bar color", "help": "Colorize the button bar", "id": "sHudButtonBarColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Steal color", "help": "", "id": "sHudButtonBarStealColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "slider", "text": " - Opacity", "help": "Fade out things you read once and never need again", "id": "iButtonBarOpacity:StarUI HUD",
                    "valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
                ,{ "type" : "section", "text" : "Rarity colors" }
                ,{ "type": "textinput", "text": "Rare", "help": "", "id": "sRarityColorRare:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Epic", "help": "", "id": "sRarityColorEpic:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Legendary", "help": "", "id": "sRarityColorLegendary:StarUI HUD", "typeSpecial" : "color"}
    
            ]
        },
        {
            "pageDisplayName" : "Tag Label",
            "content" : [
                { "type" : "section", "text" : "Tag Label" }
                ,{ "type" : "image", "src" : "config.images/HUD/TagLabel.jpg", "maxWidth": "50%", "description": "A Tag Label in the game."}
                ,{ "type": "switcher", "text": "Show Tag label at crosshair", "help": "Displays a smaller widget for the item instead of only big item card - Fixed at the crosshair or (optional) floating above the item in the world", "id": "bHudEnableTagLabelCrosshair:StarUI HUD"}
                ,{ "type": "switcher", "text": "Show Tag label in the world", "help": " But this one is bound to the world item (You should only use one to prevent confusion)", "id": "bHudEnableTagLabelWorld:StarUI HUD"}
                ,{ "type": "switcher", "text": "Moves the button bar to the Tag Label", "help": "Moves the button bar to the new tag label", "id": "bButtonBarMoveToTagLabel:StarUI HUD"}
                ,{ "type": "slider", "text": "Position X", "help": "Position of the Tag Label (relative to crosshair/world item)", "id": "fHudTagPositionX:StarUI HUD",
                    "valueOptions" : {"min" : -200, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fHudTagPositionY:StarUI HUD",
                    "valueOptions" : {"min" : -200, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "Scale (size) of the Tag Label (in percent)", "id": "iHudTagLabelScale:StarUI HUD",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "switcher", "text": "Item tag icon", "help": "Add an item tag icon to items", "id": "bHudTagShowItemTags:StarUI HUD"}
                ,{ "type": "textinput", "text": "Color", "help": "Colorize", "id": "sHudTagLabelColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Steal color", "help": "", "id": "sHudTagLabelStealColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Contraband color", "help": "", "id": "sHudTagLabelContrabandColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": "Forceitem tag icon color", "help": "Force the item tag icon to be in the same color as the label", "id": "bHudTagLabelForceTagIconColor:StarUI HUD"}
            ]
        },
        {
            "pageDisplayName" : " - Loot-O-Meter",
            "content" : [
                { "type" : "section", "text" : "Loot-O-Meter" }
                ,{ "type": "text", "text": "Loot-O-Meter (not yet registered trademark) - The higher the V/M value, the fuller the bar."}
                ,{ "type" : "image", "src" : "config.images/HUD/LootOMeter.jpg", "maxWidth": "25%", "description": "The Loot-O-Meter indicates the items value"}
                ,{ "type": "switcher", "text": "Enable Loot-O-Meber", "help": "", "id": "bHudTagLabelLootOMeter:StarUI HUD"}
                ,{ "type" : "section", "text" : "Bar fill calculation" }
                ,{ "type": "slider", "text": "Min. value/mass", "help": "Bar fill calculation is based on value/mass. The bar will start filling from this min. value/mass. When the value/mass is below this the Loot-O-Meter will be hidden.", "id": "iLootOMeterMinValue:StarUI HUD",
                    "valueOptions" : {"min" : 0, "max" : 5000, "step" : 5 }}
                ,{ "type": "slider", "text": "Min. value/mass to show", "help": "When the value/mass is below this value the Loot-O-Meter will be hidden.", "id": "iLootOMeterMinShowValue:StarUI HUD",
                    "valueOptions" : {"min" : 0, "max" : 5000, "step" : 5 }}
                ,{ "type": "slider", "text": "Max. value/mass", "help": "This will define at which value/mass the bar is 'full'.", "id": "iLootOMeterMaxValue:StarUI HUD",
                    "valueOptions" : {"min" : 0, "max" : 10000, "step" : 100 }}
                ,{ "type": "slider", "text": "Min mass for calculation", "help": "This will define a min mass for the calculation, so 'spoons' are not marked as valuable.", "id": "fLootOMeterMinMass:StarUI HUD",
                    "valueOptions" : {"min" : 0, "max" : 1, "step" : 0.01 }}
                                
                ,{ "type" : "section", "text" : "Appearance" }
                ,{ "type": "slider", "text": "Width", "help": "", "id": "iLootOMeterWidth:StarUI HUD",
                "valueOptions" : {"min" : 0, "max" : 500, "step" : 5 }}
                ,{ "type": "slider", "text": "Height", "help": "", "id": "iLootOMeterHeight:StarUI HUD",
                    "valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
                ,{ "type": "slider", "text": "Round edges", "help": "", "id": "iLootOMeterRoundEdges:StarUI HUD",
                    "valueOptions" : {"min" : 0, "max" : 50, "step" : 1 }}
                    ,{ "type" : "section", "text" : "Colors" }
                ,{ "type": "textinput", "text": "Background color", "help": "", "id": "sLootOMeterBgColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Bar color", "help": "", "id": "sLootOMeterBarColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": "Color by value", "help": "Makes the color changes based on how much the bar is filled up", "id": "bLootOMeterColorBasedOnValue:StarUI HUD"}
                ,{ "type": "textinput", "text": " - Cheap color", "help": "", "id": "sLootOMeterValueBasedColor1:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Middle color", "help": "", "id": "sLootOMeterValueBasedColor2:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Precious color", "help": "", "id": "sLootOMeterValueBasedColor3:StarUI HUD", "typeSpecial" : "color"}
            ]
        },
            {
                "pageDisplayName" : "Item cards",
                "content" : [
                   { "type" : "section", "text" : "Item card (normal mode)" }
                 ,{ "type" : "image", "src" : "config.images/HUD/ItemCard.jpg", "maxWidth": "25%", "description": "An item card for a Grendel."}
                 ,{ "type": "switcher", "text": "Item tag icon", "help": "Display the item tag icon in the item card", "id": "bItemCardAddItemTag:StarUI HUD"}
                ,{ "type": "switcher", "text": " - Colored", "help": "Enable colored version of item tag", "id": "bItemCardItemTagColored:StarUI HUD"}
                ,{ "type": "switcher", "text": "Add value per mass", "help": "Add a new entry for the value per mass", "id": "bItemCardAddValuePerMass:StarUI HUD"}
                ,{ "type": "switcher", "text": "Add Burst DPS (Damage Per Second)", "help": "Add a new entry for Burst DPS (Damage per second, without reloading time)", "id": "bItemCardAddDPS:StarUI HUD"}
                ,{ "type": "textinput", "text": "Item card color", "help": "Colorize the item card", "id": "sItemCardColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Steal color", "help": "Colorize the item card for STEAL mode", "id": "sItemCardStealColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Contraband color", "help": "Colorize the item card for CONTRABAND mode", "id": "sItemCardContrabandColor:StarUI HUD", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Reticle line anchor", "help": "Define where the reticle line should attach to (leave empty for auto-aligning it to the left side of the item card headers bottom line)", "id": "sItemCardReticleLineAttachAnchor:StarUI HUD"}

                ,{ "type": "slider", "text": "Position X", "help": "", "id": "fPositionX:ItemCard_SingleItem",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:ItemCard_SingleItem",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Max height", "help": "Specify the max height. The item card will be scaled down if the limit is exceeded. (Default is to respect the remaining screen space)", "id": "fMaxHeight:ItemCard_SingleItem",
                    "valueOptions" : {"min" : 0, "max" : 1000, "step" : 1 }}
                ,{ "type": "textinput", "text": "Anchor", "help": "Valid anchor values: TopLeft, TopRight, BottomLeft, BottomRight, X% Y%", "id": "sAnchor:ItemCard_SingleItem"}
                ,{ "type": "slider", "text": "Scale", "help": "Scaling (size) of the item card (in percent)", "id": "iScale:ItemCard_SingleItem",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}

                ,{ "type" : "section", "text" : "Item card (Scan mode)" }
                ,{ "type": "slider", "text": "Position X", "help": "", "id": "fPositionX:ItemCard_SingleItem_ScanMode",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:ItemCard_SingleItem_ScanMode",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Max height", "help": "", "id": "fMaxHeight:ItemCard_SingleItem_ScanMode",
                    "valueOptions" : {"min" : 0, "max" : 1000, "step" : 1 }}
                ,{ "type": "textinput", "text": "Anchor", "help": "Valid anchor values: TopLeft, TopRight, BottomLeft, BottomRight, X% Y%", "id": "sAnchor:ItemCard_SingleItem_ScanMode"}
                ,{ "type": "slider", "text": "Scale", "help": "Scaling (size) of the item card (in percent)", "id": "iScale:ItemCard_SingleItem_ScanMode",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ]
            },
            {
                "pageDisplayName" : "Loot list",
                "content" : [
                { "type" : "section", "text" : "Loot List" }
                ,{ "type" : "image", "src" : "config.images/HUD/LootList.jpg", "maxWidth": "25%", "description": "An upgraded Loot List."}
                ,{ "type": "switcher", "text": "Enable StarUI Loot List", "help": "Enable StarUI HUD's upgraded loot list with icons, extra information, resizable and more", "id": "bEnable:LootList"}
                ,{ "type": "switcher", "text": "Item icon tags", "help": "Show item icon tags in the list", "id": "bShowItemTags:LootList"}
                ,{ "type": "switcher", "text": " - Colored", "help": "Enable colored version of item tag", "id": "bItemTagColored:LootList"}
                ,{ "type": "textinput", "text": "Additional columns", "help": "Tip: You can toggle the sort when looking at the list and pressing ALT key", "id": "sAddColumns:LootList", "typeSpecial" : "columns",
                    "availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM", "TYPE",
                        "", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
                        "", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
                        "", "RESISTANCES", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
                        "", "AMMO", "AMMO_ROUNDS", "RARITY", "QTY", "FORMID"]}
                ,{ "type": "textinput", "text": " - Default sort", "help": "Sort the loot list by a column (the column does not need to be visible). You can use TAG here to sort by the items tag. Leave empty or use GAME for vanilla sort.", "id": "sSortByColumn:LootList", "typeSpecial" : "columns",
                    "availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM", "TYPE",
                        "", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
                        "", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
                        "", "RESISTANCES", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
                        "", "AMMO", "AMMO_ROUNDS", "RARITY", "QTY", "FORMID",
                        "", "TAG","GAME"]}
                ,{ "type": "slider", "text": " - Column width", "help": "Width of the additional column", "id": "iExtraColumnWidth:LootList",
                    "valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
                ,{ "type": "switcher", "text": "Add 'Take All' function", "help": "Add the extra function 'Take All' to loot list (Hold SHIFT and press TAKE to take all at once)", "id": "bAddTakeAll:LootList"}
                ,{ "type": "switcher", "text": "Show item card for Loot List", "help": "Show an item card to the item you have hovered in the list (for position/scale see the next sections)", "id": "bShowItemCard:LootList"}
                ,{ "type": "textinput", "text": " - For item categories", "help": "Select categories for the item card. Only list items in this categories will show a item card", "id": "sShowItemCardCategories:LootList"}
    
                ,{ "type" : "section", "text" : "Appearance" }
                ,{ "type": "slider", "text": "Scale", "help": "Scale (size) of the whole list", "id": "iScale:LootList",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "List entry height", "help": "", "id": "iListEntryHeight:LootList",
                    "valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
                ,{ "type": "slider", "text": "List entry font size", "help": "", "id": "iListEntryFontSize:LootList",
                    "valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
                ,{ "type": "switcher", "text": "Auto list height", "help": "Auto-adapt list height to content (max to the specified height below)", "id": "bAdaptHeightToContent:LootList"}
                ,{ "type": "textinput", "text": "List color", "help": "Colorize the list!", "id": "sColor:LootList", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": " - Steal color", "help": "", "id": "sStealColor:LootList", "typeSpecial" : "color"}
        
                ,{ "type" : "section", "text" : "Position and size (Normal mode)" }
                ,{ "type": "slider", "text": "Position X", "help": "List position in normal mode (Default: 1193, 302)", "id": "fPositionX:LootList",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:LootList",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Width", "help": "List dimension in normal mode (Vanilla: 373x248, Default: 373x390)", "id": "iWidth:LootList",
                    "valueOptions" : {"min" : 0, "max" : 1000, "step" : 1 }}
                ,{ "type": "slider", "text": "Height", "help": "", "id": "iHeight:LootList",
                    "valueOptions" : {"min" : 0, "max" : 1000, "step" : 1 }}

                ,{ "type" : "section", "text" : "Item card (Normal mode)" }
                ,{ "type": "slider", "text": "Position X", "help": "", "id": "fPositionX:LootList.ItemCard",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:LootList.ItemCard",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "textinput", "text": "Anchor", "help": "Valid anchor values: TopLeft, TopRight, BottomLeft, BottomRight, X% Y%", "id": "sAnchor:LootList.ItemCard"}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "iScale:LootList.ItemCard",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Max height", "help": "", "id": "fMaxHeight:LootList.ItemCard",
                    "valueOptions" : {"min" : 0, "max" : 1000, "step" : 1 }}

                ,{ "type" : "section", "text" : "Position and size (Scan mode)" }
                ,{ "type": "slider", "text": "Position X", "help": "Note: The list headline is provided by the scanner interface. Keep that in mind when changing the position in scanner mode.", "id": "fScannerPositionX:LootList",
                    "valueOptions" : {"min" : 0, "max" : 1920 , "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fScannerPositionY:LootList",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Width", "help": "Loot list dimension in scanner mode", "id": "iScannerWidth:LootList",
                    "valueOptions" : {"min" : 0, "max" : 1000, "step" : 1 }}
                ,{ "type": "slider", "text": "Height", "help": "", "id": "iScannerHeight:LootList",
                    "valueOptions" : {"min" : 0, "max" : 1000, "step" : 1 }}
                ,{ "type": "textinput", "text": "Attach point anchor", "help": "Attach point of the reticle line (from item circle to the list). Available: TopLeft, TopRight, BottomLeft, BottomRight", "id": "sReticleLineAttachPoint:LootList"}

    
                ,{ "type" : "section", "text" : "Item card (Scan mode)" }
                ,{ "type": "slider", "text": "Position X", "help": "", "id": "fPositionX:LootList.ItemCard_ScanMode",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:LootList.ItemCard_ScanMode",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "iScale:LootList.ItemCard_ScanMode",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "textinput", "text": "Anchor", "help": "Valid anchor values: TopLeft, TopRight, BottomLeft, BottomRight, X% Y%", "id": "sAnchor:LootList.ItemCard_ScanMode"}
                ,{ "type": "slider", "text": "Max height", "help": "", "id": "fMaxHeight:LootList.ItemCard_ScanMode",
                    "valueOptions" : {"min" : 0, "max" : 1000, "step" : 1 }}
                ]
            },
            {
                "pageDisplayName" : "Watch",
                "content" : [
                    { "type" : "section", "text" : "Watch" }
                ,{ "type" : "image", "src" : "config.images/HUD/Watch.jpg", "maxWidth": "33%", "description": "The Watch. But you can't read the time from it."}
                ,{ "type": "switcher", "text": "Enable widget", "help": "The watch in the bottom left area", "id": "bEnabled:Watch"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:Watch", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:Watch"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 72, 808 (for 16:9. Different on widescreen!)", "id": "fPositionX:Watch",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:Watch",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "Note scale and rotation work only with disabled 3D effect", "id": "fScale:Watch",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "Note scale and rotation work only with disabled 3D effect", "id": "fRotation:Watch",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ,{ "type": "switcher", "text": "Disable the 3D effect", "help": "Disable the 3D effect", "id": "bDisable3D:Watch"}
                ,{ "type": "textinput", "text": "Custom 3D Matrix", "help": "Adjust the 3D transformation matrix. Warning: Only for 3D experts!\nDefault: 1.065422, -0.06871, -0.150934, 0, -0.037639, 1.062183, 0.191458, 0, 0.127329, -0.171576, 0.976908, 0, 41.719982, 807.84552, -4.454321, 1", "id": "s3DTransformationMatrix:Watch"}
                ,{ "type": "switcher", "text": "Enable mission markers", "help": "Enable mission markers", "id": "bEnableMissionMarker:Watch"}
                ,{ "type": "switcher", "text": "Enable enemy markers", "help": "Enable enemy markers", "id": "bEnableEnemyMarker:Watch"}
                ,{ "type": "switcher", "text": "Enable special marker (like your ship)", "help": "Enable special marker (like your ship)", "id": "bEnableSpecialMarker:Watch"}
                ,{ "type": "switcher", "text": "Enable compass", "help": "Enable compass", "id": "bEnableCompass:Watch"}
                ,{ "type": "switcher", "text": "Enable O2 bar (normal mode)", "help": "Enable O2 bar (normal mode)", "id": "bEnableO2Bar:Watch"}
                ,{ "type": "switcher", "text": "Enable planet icon", "help": "Enable planet icon", "id": "bEnablePlanetIcon:Watch"}
                ,{ "type": "switcher", "text": "Enable location name", "help": "Enable location name", "id": "bEnableLocationName:Watch"}
                ,{ "type" : "section", "text" : "Scan mode parts" }
                ,{ "type": "switcher", "text": "Enable O2 bar", "help": "", "id": "bEnableScanO2Bar:Watch"}
                ,{ "type": "switcher", "text": "Enable temperature", "help": "", "id": "bEnableScanTemperature:Watch"}
                ,{ "type": "switcher", "text": "Enable oxygen", "help": "", "id": "bEnableScanOxygen:Watch"}
                ,{ "type": "switcher", "text": "Enable gravitation", "help": "", "id": "bEnableScanGrav:Watch"}
                ,{ "type": "switcher", "text": "Enable location text", "help": "", "id": "bEnableScanLocationText:Watch"}
                ,{ "type": "switcher", "text": "Enable bio alert text", "help": "", "id": "bEnableScanBioAlertText:Watch"}
                ,{ "type": "switcher", "text": "Enable environment alert text", "help": "", "id": "bEnableScanEnvAlertText:Watch"}
            ]
        },
        {
            "pageDisplayName" : "Player meter",
            "content" : [
                { "type" : "section", "text" : "Player meter" }
                ,{ "type" : "image", "src" : "config.images/HUD/PlayerMeter.jpg", "maxWidth": "50%", "description": "The player meter displays various stats"}
                ,{ "type" : "text", "text" : "Displays player health, weapon, grenades etc." }
                ,{ "type": "switcher", "text": "Enable player meter", "help": "Displays player health, weapon, grenades etc.", "id": "bEnabled:RightMeters"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:RightMeters", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:RightMeters"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 1836, 1032 (for 16:9. Different on widescreen!)", "id": "fPositionX:RightMeters",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:RightMeters",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "Note scale and rotation work only with disabled 3D effect", "id": "fScale:RightMeters",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "Note scale and rotation work only with disabled 3D effect", "id": "fRotation:RightMeters",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ,{ "type": "switcher", "text": "Disable the 3D effect", "help": "Disable the 3D effect", "id": "bDisable3D:RightMeters"}
                ,{ "type": "textinput", "text": "Custom 3D Matrix", "help": "Adjust the 3D transformation matrix. Warning: Only for 3D experts!\nDefault: 0.958322, 0, -0.285688, 0, -0.014952, 0.99863, -0.050155, 0, 0.285297, 0.052336, 0.957009, 0, 1879.831787, 1042.355225, 16.766846, 1", "id": "s3DTransformationMatrix:RightMeters"}
            ]
        },
        {
            "pageDisplayName" : "Crosshair",
            "content" : [
                { "type" : "section", "text" : "Crosshair" }
                ,{ "type": "switcher", "text": "Enable crosshair", "help": "The crosshair", "id": "bEnabled:Crosshair"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:Crosshair", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:Crosshair"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 960, 540", "id": "fPositionX:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "fScale:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "", "id": "fRotation:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ,{ "type": "switcher", "text": "Show when aiming", "help": "Show crosshair when aiming (first person)", "id": "bShowInIronSights:Crosshair"}
                ,{ "type": "switcher", "text": "Enable spread animation", "help": "Enable the spread animation (how far bullets go from the crosshairs center)", "id": "bEnableSpreadIndication:Crosshair"}
                ,{ "type": "switcher", "text": "Show weapon/tool is effective", "help": "Show if a weapon/tool is effective by changing the color", "id": "bEnableEffectiveIndication:Crosshair"}
                ,{ "type" : "section", "text" : "Crosshair replacement mode" }
                ,{ "type" : "text", "text" : "Easily replace the crosshair by pre-defined types! Available modes:\nDefault          - Default!\nDotOnly          - Show only the DOT crosshair (always)\nDotWhenNotAiming - Show the DOT crosshair when not aiming (for all weapon crosshairs)\nNone             - No Crosshair at all\nCustom           - Define your own replacements (in the area below)" }
                                                
                ,{ "type": "dropdown", "text": "Replacement Mode", "help": "Replaces the crosshair by pre-defined types.", "id": "sReplaceMode:Crosshair",
                    "valueOptions" : {"options" : ["Default","DotOnly", "DotWhenNotAiming", "None", "Custom"]} }
                
                ,{ "type" : "section", "text" : "Crosshair color by type" }
                ,{ "type" : "text", "text" : "Colorize your crosshair by type! (leave empty for default crosshair widget color)" }
                ,{ "type": "textinput", "text": "Pistol", "help": "", "id": "sColorPistol:Crosshair", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Cutter", "help": "", "id": "sColorCutter:Crosshair", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Dot", "help": "", "id": "sColorDot:Crosshair", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Shotgun", "help": "", "id": "sColorShotgun:Crosshair", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Rifle", "help": "", "id": "sColorRifle:Crosshair", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Laser", "help": "", "id": "sColorLaser:Crosshair", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Tool", "help": "", "id": "sColorTool:Crosshair", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Interaction", "help": "", "id": "sColorInteraction:Crosshair", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Command", "help": "", "id": "sColorCommand:Crosshair", "typeSpecial" : "color"}

                ,{ "type" : "section", "text" : "Crosshair size by type" }
                ,{ "type" : "text", "text" : "Scale your crosshair by type! (in percent, default is the widgets scale)" }
                ,{ "type": "slider", "text": "Pistol", "help": "", "id": "iScalePistol:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                ,{ "type": "slider", "text": "Cutter", "help": "", "id": "iScaleCutter:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                ,{ "type": "slider", "text": "Dot", "help": "", "id": "iScaleDot:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                ,{ "type": "slider", "text": "Shotgun", "help": "", "id": "iScaleShotgun:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                ,{ "type": "slider", "text": "Rifle", "help": "", "id": "iScaleRifle:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                ,{ "type": "slider", "text": "Laser", "help": "", "id": "iScaleLaser:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                ,{ "type": "slider", "text": "Tool", "help": "", "id": "iScaleTool:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                ,{ "type": "slider", "text": "Interaction", "help": "", "id": "iScaleInteraction:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                ,{ "type": "slider", "text": "Command", "help": "", "id": "iScaleCommand:Crosshair",
                    "valueOptions" : {"min" : 0, "max" : 400, "step" : 1 }}
                
                ,{ "type" : "section", "text" : "CUSTOM replacement mode" }
                ,{ "type" : "text", "text" : "Custom replacements for 1st person (needs sReplaceMode to be 'Custom')" }

                ,{ "type" : "section", "text" : "CUSTOM replacement mode" }
                ,{ "type": "dropdown", "text": "Pistol", "help": "", "id": "sReplacePistol:Crosshair.CustomReplacements",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Cutter", "help": "", "id": "sReplaceCutter:Crosshair.CustomReplacements",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Dot", "help": "", "id": "sReplaceDot:Crosshair.CustomReplacements",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Shotgun", "help": "", "id": "sReplaceShotgun:Crosshair.CustomReplacements",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Rifle", "help": "", "id": "sReplaceRifle:Crosshair.CustomReplacements",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Laser", "help": "", "id": "sReplaceLaser:Crosshair.CustomReplacements",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Tool", "help": "", "id": "sReplaceTool:Crosshair.CustomReplacements",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Interaction", "help": "", "id": "sReplaceInteraction:Crosshair.CustomReplacements",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Command", "help": "", "id": "sReplaceCommand:Crosshair.CustomReplacements",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }

                ,{ "type" : "text", "text" : "Custom replacements when aiming in 1st person (needs sReplaceMode to be 'Custom')" }
                ,{ "type": "dropdown", "text": "Pistol", "help": "", "id": "sReplacePistol:Crosshair.CustomReplacements_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Cutter", "help": "", "id": "sReplaceCutter:Crosshair.CustomReplacements_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Dot", "help": "", "id": "sReplaceDot:Crosshair.CustomReplacements_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Shotgun", "help": "", "id": "sReplaceShotgun:Crosshair.CustomReplacements_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Rifle", "help": "", "id": "sReplaceRifle:Crosshair.CustomReplacements_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Laser", "help": "", "id": "sReplaceLaser:Crosshair.CustomReplacements_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Tool", "help": "", "id": "sReplaceTool:Crosshair.CustomReplacements_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Interaction", "help": "", "id": "sReplaceInteraction:Crosshair.CustomReplacements_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Command", "help": "", "id": "sReplaceCommand:Crosshair.CustomReplacements_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }

                ,{ "type" : "text", "text" : "Custom replacements in 3rd person (needs sReplaceMode to be 'Custom')" }
                ,{ "type": "dropdown", "text": "Pistol", "help": "", "id": "sReplacePistol:Crosshair.CustomReplacements_3rdPerson",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Cutter", "help": "", "id": "sReplaceCutter:Crosshair.CustomReplacements_3rdPerson",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Dot", "help": "", "id": "sReplaceDot:Crosshair.CustomReplacements_3rdPerson",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Shotgun", "help": "", "id": "sReplaceShotgun:Crosshair.CustomReplacements_3rdPerson",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Rifle", "help": "", "id": "sReplaceRifle:Crosshair.CustomReplacements_3rdPerson",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Laser", "help": "", "id": "sReplaceLaser:Crosshair.CustomReplacements_3rdPerson",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Tool", "help": "", "id": "sReplaceTool:Crosshair.CustomReplacements_3rdPerson",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Interaction", "help": "", "id": "sReplaceInteraction:Crosshair.CustomReplacements_3rdPerson",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Command", "help": "", "id": "sReplaceCommand:Crosshair.CustomReplacements_3rdPerson",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }

                ,{ "type" : "text", "text" : "Custom replacements when aiming in 3rd person (needs sReplaceMode to be 'Custom')" }
                ,{ "type": "dropdown", "text": "Pistol", "help": "", "id": "sReplacePistol:Crosshair.CustomReplacements_3rdPerson_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Cutter", "help": "", "id": "sReplaceCutter:Crosshair.CustomReplacements_3rdPerson_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Dot", "help": "", "id": "sReplaceDot:Crosshair.CustomReplacements_3rdPerson_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Shotgun", "help": "", "id": "sReplaceShotgun:Crosshair.CustomReplacements_3rdPerson_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Rifle", "help": "", "id": "sReplaceRifle:Crosshair.CustomReplacements_3rdPerson_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Laser", "help": "", "id": "sReplaceLaser:Crosshair.CustomReplacements_3rdPerson_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Tool", "help": "", "id": "sReplaceTool:Crosshair.CustomReplacements_3rdPerson_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Interaction", "help": "", "id": "sReplaceInteraction:Crosshair.CustomReplacements_3rdPerson_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
                ,{ "type": "dropdown", "text": "Command", "help": "", "id": "sReplaceCommand:Crosshair.CustomReplacements_3rdPerson_Aiming",
                    "valueOptions" : {"options" : ["None","Pistol","Cutter","Dot","Shotgun","Rifle","Laser","Tool","Interaction","Command"]} }
            ]
        },
        {
            "pageDisplayName" : "Hit and kill marker",
            "content" : [
                { "type" : "section", "text" : "Hit and kill marker" }
                ,{ "type": "switcher", "text": "Hit and kill markers on the crosshair", "help": "Hit and kill markers on the crosshair", "id": "bEnabled:HitAndKill"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:HitAndKill", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:HitAndKill"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 960, 538", "id": "fPositionX:HitAndKill",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:HitAndKill",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "fScale:HitAndKill",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "", "id": "fRotation:HitAndKill",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ]
            },
            {
                "pageDisplayName" : "Explosive indicator",
                "content" : [
                    { "type" : "section", "text" : "Explosive indicator" }
                ,{ "type": "switcher", "text": "Shows an indicator when an explosive thing is near you", "help": "Shows an indicator when an explosive thing is near you", "id": "bEnabled:ExplosiveIndicator"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:ExplosiveIndicator", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:ExplosiveIndicator"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 960, 540", "id": "fPositionX:ExplosiveIndicator",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:ExplosiveIndicator",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "fScale:ExplosiveIndicator",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "", "id": "fRotation:ExplosiveIndicator",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ]
            },
            {
                "pageDisplayName" : "Hit indicator",
                "content" : [
                    { "type" : "section", "text" : "Hit indicator" }
                ,{ "type": "switcher", "text": "Displays a indicator from where you were hit", "help": "Displays a indicator from where you were hit", "id": "bEnabled:DirectionalHit"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:DirectionalHit", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:DirectionalHit"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 960, 540", "id": "fPositionX:DirectionalHit",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:DirectionalHit",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "fScale:DirectionalHit",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "", "id": "fRotation:DirectionalHit",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ]
            },
            {
                "pageDisplayName" : "Stealth Meter",
                "content" : [
                    { "type" : "section", "text" : "Stealth Meter" }
                    ,{ "type" : "image", "src" : "config.images/HUD/StealthMeter.jpg", "maxWidth": "33%", "description": "Shows your current stealth level"}
                ,{ "type": "switcher", "text": "Enable Stealth Meter widget", "help": "Shows your current stealth level", "id": "bEnabled:StealthMeter"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:StealthMeter", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:StealthMeter"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 960, 128", "id": "fPositionX:StealthMeter",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:StealthMeter",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "fScale:StealthMeter",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "", "id": "fRotation:StealthMeter",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ,{ "type" : "section", "text" : "Stealh bar colors" }
                ,{ "type" : "text", "text" : "Override color for the various stealth modes" }
                ,{ "type": "textinput", "text": "Hidden", "help": "", "id": "sBarColorHidden:StealthMeter", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Caution", "help": "", "id": "sBarColorCaution:StealthMeter", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Detected", "help": "", "id": "sBarColorDetected:StealthMeter", "typeSpecial" : "color"}
                ,{ "type": "textinput", "text": "Danger", "help": "", "id": "sBarColorDanger:StealthMeter", "typeSpecial" : "color"}
            ]
        },
        {
            "pageDisplayName" : "Artifact powers",
            "content" : [
                { "type" : "section", "text" : "Artifact powers" }
                ,{ "type": "switcher", "text": "Enable Artifact Powers widget", "help": "Artifact powers widget. You know what it is when you are at that stage in the game.", "id": "bEnabled:ArtifactPowers"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:ArtifactPowers", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:ArtifactPowers"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 960, 540", "id": "fPositionX:ArtifactPowers",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:ArtifactPowers",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "fScale:ArtifactPowers",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "", "id": "fRotation:ArtifactPowers",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ]
            },
            {
                "pageDisplayName" : "Social Interactions",
                "content" : [
                    { "type" : "section", "text" : "Social Interactions" }
                ,{ "type": "switcher", "text": "Enable Social Interactions widget", "help": "Widget for social interactions (requires skill).", "id": "bEnabled:SocialCommands"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:SocialCommands", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:SocialCommands"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 1090, 190", "id": "fPositionX:SocialCommands",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:SocialCommands",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "fScale:SocialCommands",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "", "id": "fRotation:SocialCommands",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ]
            },
            {
                "pageDisplayName" : "Crew buffs",
                "content" : [
                    { "type" : "section", "text" : "Crew buffs" }
                ,{ "type": "switcher", "text": "Enable Crew buffs widget", "help": "Crew buffs widget", "id": "bEnabled:CrewBuff"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:CrewBuff", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:CrewBuff"}
                ,{ "type": "slider", "text": "Position X", "help": "Re-position the widget - default position: 1851, 139", "id": "fPositionX:CrewBuff",
                    "valueOptions" : {"min" : 0, "max" : 1920, "step" : 1 }}
                ,{ "type": "slider", "text": "Position Y", "help": "", "id": "fPositionY:CrewBuff",
                    "valueOptions" : {"min" : 0, "max" : 1080, "step" : 1 }}
                ,{ "type": "slider", "text": "Scale", "help": "", "id": "fScale:CrewBuff",
                    "valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
                ,{ "type": "slider", "text": "Rotation", "help": "", "id": "fRotation:CrewBuff",
                    "valueOptions" : {"min" : 0, "max" : 360, "step" : 1 }}
                ]
            },
            {
                "pageDisplayName" : "Floating quest marker",
                "content" : [
                    { "type" : "section", "text" : "Floating quest marker" }
                    ,{ "type" : "image", "src" : "config.images/HUD/FloatingQuestMarker.jpg", "maxWidth": "33%", "description": "The floating quest marker"}
                    ,{ "type": "switcher", "text": "Enable Floating quest marker", "help": "The floating quest marker on the HUD", "id": "bEnabled:QuestMarker"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:QuestMarker", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:QuestMarker"}
            ]
        },
        {
            "pageDisplayName" : "Hit damage",
            "content" : [
                { "type" : "section", "text" : "Hit damage" }
                ,{ "type": "switcher", "text": "Enable hit damage", "help": "Shows hit damage", "id": "bEnabled:HitDamage"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:HitDamage", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:HitDamage"}
            ]
        },
        {
            "pageDisplayName" : "Enemy health bars",
            "content" : [
                { "type" : "section", "text" : "Enemy health bars" }
                ,{ "type": "switcher", "text": "Enable Enemy health bars", "help": "Contains the enemy health bars.", "id": "bEnabled:EnemyHealth"}
                ,{ "type": "textinput", "text": "Widget color", "help": "Colorize the widget. If the value is empty, the default HUD color will be used.", "id": "sColor:EnemyHealth", "typeSpecial" : "color"}
                ,{ "type": "switcher", "text": " - Force color", "help": "Force color on widget (Warning: This will remove any color/brightness)", "id": "bForceColor:EnemyHealth"}                
            ]
        }
    ]
},
iniContentDefault : "[StarUI HUD]\n; =================================\n; Configuration file for StarUI HUD \n; =================================\n; \n; Allows you to configure many different settings for your StarUI HUD layout. \n; To adjust the widgets and their position and color see the widget section later in this file\n;\n; Some general notes and tips: \n; \n; Position\n; --------\n; The position is specified based on a 1920x1080 layer. If you have another resolution, it will \n; automatically transformed into the position on your monitor.\n; \n; Color\n; -----\n; The sColors values are color modifiers, so if apply a red color to a green element it will \n; become orange!\n; For most widgets you have the option bForceColor, which will force the color. But be careful,\n; this setting will remove ALL color information as well as any brightness levels from the widget.\n; The colors are specified as \"red, green, blue(, alpha)\" where alpha is optional. \n; RGB values are from 0 to 255. Alpha is from 0 to 100 (percent).\n; Most colors are optional overrides. So if you don't specify a value for the widget, it will \n; use the hud's default color (sHudDefaultColor).\n; \n; Examples: \n;   black is \"0, 0, 0\"\n;   white is \"255, 255, 255\"\n;   red is \"255, 0, 0\"\n;   blue is \"0, 0, 255\"\n;   half-transparent without color is \"255, 255, 255, 50\"\n; Color tip: Use any of the common RGB color picker on the net to find your values!\n;\n; Anchors\n; -------\n; Define a point on an element for various features (like as alignment for the item card, so in \n; which direction an item card should be drawn or at which point the leading line attaches to)\n;\n; Valid values: TopLeft, TopRight, BottomLeft, BottomRight, {HorizontalOffset}% {VerticalOffset}%\n;\n; Examples for free percent values:\n;   0% 0%     - Equals TopLeft\n;   100% 0%   - Equals TopRight\n;   100% 100% - Equals BottomRight\n;   50% 50%   - The center of the shape\n;   0% 25%    - This will position the anchor on the left side on 1/4 height.\n;\n; Tips\n; ------------\n; * You can edit this file while the game is running. A simple quick-save/quick-load should \n;   load the new configuration! \n; * Copy this file and rename the copy to \"StarUI HUD.ini\". Then change your settings in the \n;   new file. The new file won't be overwritten by mod updates!\n\n;=============\n; HUD Generic\n;=============\n\n; Default HUD color (may be overridden by a elements special color)\nsHudDefaultColor = 122, 192, 244\n; Use hard drop-down-shadows instead of soft ones\nbHudHardDropDownShadow = 0\n\n;=============\n; Quality-Of-Life\n;=============\n; Preventing accidental steals. You need to sneak to to steal.\nbHudPreventStealAccident = 1\n; Always allow stealing of mines\nbHudPreventStealAccidentIgnoreMines = 1\n\n;=============\n; Item marker\n;=============\n; This is the circle on objects in the world you are looking at\n; Enable or disable the line from the item marker (circle) to other elements for different types of viewed element...\n; Note: When using the new TagLabel it's recommended to it disabled. \n; ...when viewing a generic entity (bed, chair,...)\nbHudReticleLineForGeneric = 0\n; ...when viewing an item without item card (late game)\nbHudReticleLineForSingleItem = 0\n; ...when viewing an item with item card\nbHudReticleLineForSingleItemWithItemCard = 0\n; ...when viewing a inventory \nbHudReticleLineForLootList = 1\n; Colorize your item marker circle (and line)\nsHudReticleColor = \nsHudReticleStealColor = 255, 128, 128\n\n; =================\n;  Standard Label\n; =================\n; The white box you see mostly in Vanilla and Vanilla Extended when hovering things without item cards\nsLabelColor = \nsLabelStealColor = 255, 128, 128\nsLabelContrabandColor = 253, 204, 36\n\n; =============\n;  Tag Label\n; =============\n; The \"Tag Label\" is a alternate (new) way to display the item you're looking at. \n; Displays a smaller widget for the item instead of only big item card - Fixed at the crosshair or (optional) floating above the item in the world\nbHudEnableTagLabelCrosshair = 1\n; Tag label - But this one is bound to the world item (You should only use one to prevent confusion)\nbHudEnableTagLabelWorld = 0\n; Position of the Tag Label (relative to crosshair/world item)\nfHudTagPositionX = 0\nfHudTagPositionY = 50\n; Scale (size) of the Tag Label (in percent)\niHudTagLabelScale = 100\n; Add an item tag icon to items\nbHudTagShowItemTags = 1\n; Colerize\nsHudTagLabelColor = \nsHudTagLabelStealColor = 255, 128, 128\nsHudTagLabelContrabandColor = 253, 204, 36\n; Force the item tag icon to be in the same color as the label\nbHudTagLabelForceTagIconColor = 0\n; The newest high-tech HUD addon by the Constellation engineers: Showing the value/mass as a bar on your HUD!\n; The Loot-O-Meter will add a bar below the item name which visualizes the V/M (\"value per mass\") value for this item. \n; The higher the V/M value, the fuller the bar. \nbHudTagLabelLootOMeter = 1\n\n; ==============\n;  Loot-O-Meter\n; ==============\n; Customize the look of your Loot-O-Meter (part of Tag Label):\niLootOMeterWidth = 200\niLootOMeterHeight = 8\niLootOMeterRoundEdges = 3\n; Bar fill calculation based on value/mass. The bar will fill from min to max value. When the value is below iLootOMeterMinValue or iLootOMeterMinShowValue the Loot-O-Meter will be hidden.\niLootOMeterMinValue = 0\niLootOMeterMaxValue = 1000\niLootOMeterMinShowValue = 250\n; Allows you to set a minimal mass for the calculation to prevent items like pens to be shown as \"very valuable\".\nfLootOMeterMinMass = 0.2\n; Loot-O-Meter Coloration\nsLootOMeterBgColor = 140,140,140,20\nsLootOMeterBarColor = 255,255,255,100\nbLootOMeterColorBasedOnValue = 1\nsLootOMeterValueBasedColor1 = 135, 30, 30\nsLootOMeterValueBasedColor2 = 135, 135, 30\nsLootOMeterValueBasedColor3 = 30, 135, 30\n\n; ===============\n;  Rarity colors\n; ===============\nsRarityColorRare = 80, 136, 244\nsRarityColorEpic = \nsRarityColorLegendary = \n\n; ==========\n;  Big Door\n; ==========\n; Enables a big door icon indicator when you look at a door which leads to other areas/cells (part of Tag Lable)\nbHudEnableBigDoorIcon = 1\n; Colorize the door icon\nsHudBigDoorColor = \n\n; ============\n;  Button Bar\n; ============\n; Smaller buttons for the button bar \nbButtonBarSmallerButtons = 1\n; Moves the button bar to the new tag label\nbButtonBarMoveToTagLabel = 1\n; Colorize the button bar\nsHudButtonBarColor = \nsHudButtonBarStealColor = 255, 128, 128\n; Fade out things you read once and never need again\niButtonBarOpacity = 50\n\n;=========================\n; Item card - all versions\n;=========================\n; Display the item tag icon in the item card\nbItemCardAddItemTag = 1\n; Enable colored version of item tag\nbItemCardItemTagColored = 1\n; Add a new entry for the value per mass\nbItemCardAddValuePerMass = 1\n; Add a new entry for Burst DPS (Damage per second, without reloading time)\nbItemCardAddDPS = 1\n; Colorize the item card\nsItemCardColor = \n; Colorize the item card for STEAL mode\nsItemCardStealColor = 255, 128, 128\n; Colorize the item card for CONTRABAND mode\nsItemCardContrabandColor = 253, 204, 36\n\n; Define where the reticle line should attach to (leave empty for auto-aligning it to the left side of the item card headers bottom line)\nsItemCardReticleLineAttachAnchor = \n\n[ItemCard_SingleItem]\n; Position of the item card (when hovering items. Default: 1168, 257)\n;   Values for top right display: X=1900, Y=20,  Anchor=TopRight\n;   Values for Vanilla display:   X=1168, Y=257, Anchor=TopLeft\nfPositionX = 1900\nfPositionY = 20\n; Specify the max height. The item card will be scaled down if the limit is exceeded. (Default is to respect the remaining screen space)\nfMaxHeight = 850\n; Anchor for the item cards position (this determines in which direction the item card will expand from your given position, e.g. TopLeft will expand to right/down, BottomLeft to right/up)\n; Valid values for anchor: TopLeft, TopRight, BottomLeft, BottomRight\nsAnchor = TopRight\n; Scaling (size) of the item card (in percent)\niScale = 100\n\n[ItemCard_SingleItem_ScanMode]\n; Position/scale of the item card in scanner mode.\n; For a detailed description of the settings see [ItemCard_SingleItem]\nfPositionX = 1358\nfPositionY = 257\nfMaxHeight = 600\nsAnchor = TopLeft\niScale = 100\n\n\n[LootList]\n; ===========\n;  Loot List\n; ===========\n; Enable StarUI HUD's upgraded loot list with icons, extra information, resizable and more\nbEnable = 1\n; Show item icon tags in the list\nbShowItemTags = 1\n; Enable colored version of item tag\nbItemTagColored = 1\n; List entry height\niListEntryHeight = 30\n; List entry font size\niListEntryFontSize = 16\n\n; Add extra columns to the loot list. You can add multiple columns separated by comma.\n; For a list of available columns see the list later in the file. Most probably you like to use one of those: VPM, DPS, VALUE, VALUE_STACK, MASS, MASS_STACK\n; Tip: You can toggle the sort when looking at the list and pressing ALT key \nsAddColumns = VPM\n; Sort the loot list by a column (the column does not need to be visible). You can use TAG here to sort by the items tag. Leave empty or use GAME for vanilla sort.\nsSortByColumn = GAME\n; Width of the additional column\niExtraColumnWidth = 65\n; Add the extra function \"Take All\" to loot list (Hold SHIFT and press TAKE to take all at once)\nbAddTakeAll = 1\n\n; Auto-adapt list height to content (max to the specified height below)\nbAdaptHeightToContent = 1\n; Colorize the list!\nsColor = \nsStealColor = 255, 128, 128\n\n; Scale (size) of the whole list\niScale = 100\n\n; List position in normal mode (Default: 1193, 302)\nfPositionX = 1193\nfPositionY = 302\n; List dimension in normal mode (Vanilla: 373x248, Default: 373x390)\niWidth = 373\niHeight = 390\n\n; Loot list position in scanner mode\n; Note: The list headline is provided by the scanner interface. Keep that in mind when changing the position in scanner mode.\nfScannerPositionX = 1380\nfScannerPositionY = 565\n; Loot list dimension in scanner mode\niScannerWidth = 373\niScannerHeight = 248\n\n; Attach point of the reticle line (from item circle to the list). Available: TopLeft, TopRight, BottomLeft, BottomRight\nsReticleLineAttachPoint = TopLeft\n\n; Show an item card to the item you have hovered in the list (for position/scale see the next sections)\nbShowItemCard = 1\n; Select categories for the item card. Only list items in this categories will show a item card\nsShowItemCardCategories = Weapons, Ammo, Spacesuits, Packs, Helmets, Apparel, Throwables, Aid, Notes, Resources, Misc\n\n[LootList.ItemCard]\n; Position/scale of the item card for the loot list (normal mode)\n; For a detailed description of the settings see [ItemCard_SingleItem]\nfPositionX = 1610\nfPositionY = 258\nsAnchor = TopLeft\niScale = 80\nfMaxHeight = \n\n\n[LootList.ItemCard_ScanMode]\n; Position/scale of the item card for the loot list (scanner mode)\n; For a detailed description of the settings see [ItemCard_SingleItem]\nfPositionX = 1410\nfPositionY = 500\niScale = 80\nsAnchor = BottomLeft\nfMaxHeight = \n\n\n; =============\n;  HUD Widgets \n; =============\n; Re-position and colorize every widget like you want. If you set no value for the color, then sHudDefaultColor is used.\n; \n; Enable or disable the whole widget with bEnabled.\n; Also allows you to enlarge or shrink the widget (fScale) and rotate it (fRotation).\n;\n; Special values are explained above the setting. \n; For a explanation of position and color see the file header. \n\n[Watch]\n; The watch in the bottom left area\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = \nbForceColor = 0\n; Re-position the widget - default position: 72, 808 (for 16:9. Different on widescreen!) - Remove the leading \";\" to adjust position\n; Note: The widget uses a 3D effect, so adjusting the position can be tricky (Just try some values and see where it ends)\n;fPositionX = 72\n;fPositionY = 808\n; Note scale and rotation work only with disabled 3D effect\nfScale = 100\nfRotation = 0\n; Disable the 3D effect\nbDisable3D = 0\n; Adjust the 3D transformation matrix. Warning: Only for 3D experts! (remove \";\" to change the values)\n;s3DTransformationMatrix = 1.065422, -0.06871, -0.150934, 0, -0.037639, 1.062183, 0.191458, 0, 0.127329, -0.171576, 0.976908, 0, 41.719982, 807.84552, -4.454321, 1\n\n; Enable mission markers\nbEnableMissionMarker = 1\n; Enable enemy markers\nbEnableEnemyMarker = 1\n; Enable special marker (like your ship)\nbEnableSpecialMarker = 1\n; Enable compass\nbEnableCompass = 1\n; Enable O2 bar (normal mode)\nbEnableO2Bar = 1\n; Enable planet icon\nbEnablePlanetIcon = 1\n; Enable location name\nbEnableLocationName = 1\n; Various displays in scan mode\nbEnableScanO2Bar = 1\nbEnableScanTemperature = 1\nbEnableScanOxygen = 1\nbEnableScanGrav = 1\nbEnableScanLocationText = 1\nbEnableScanBioAlertText = 1\nbEnableScanEnvAlertText = 1\n\n\n[RightMeters]\n; Displays player health, weapon, grenades etc.\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = \nbForceColor = 0\n; Re-position the widget - default position: 1836, 1032 (for 16:9. Different on widescreen!) - Remove the leading \";\" to adjust position\n; Note: The widget uses a 3D effect, so adjusting the position can be tricky (Just try some values and see where it ends)\n;fPositionX = 1846\n;fPositionY = 1037\n; Note scale and rotation work only with disabled 3D effect\nfScale = 100\nfRotation = 0\n; Disable the 3D effect\nbDisable3D = 0\n; Adjust the 3D transformation matrix. Warning: Only for 3D experts! (remove \";\" to change the values)\n;s3DTransformationMatrix = 0.958322, 0, -0.285688, 0, -0.014952, 0.99863, -0.050155, 0, 0.285297, 0.052336, 0.957009, 0, 1879.831787, 1042.355225, 16.766846, 1\n\n[Crosshair]\n; The crosshair\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = \nbForceColor = 0\n; Re-position the widget - default position: 960, 540\nfPositionX = 960\nfPositionY = 540\nfScale = 100\nfRotation = 0\n\n; Special options for crosshair\n\n; Show crosshair when aiming (first person)\nbShowInIronSights = 0\n\n; Enable the spread animation (how far bullets go from the crosshairs center)\nbEnableSpreadIndication = 1\n\n; Show if a weapon/tool is effective by changing the color\nbEnableEffectiveIndication = 1\n\n; Crosshair replace mode\n; \n; The modes: \n;   Default          - Default!\n;   DotOnly          - Show only the DOT crosshair (always)\n;   DotWhenNotAiming - Show the DOT crosshair when not aiming (for all weapon crosshairs)\n;   None             - No Crosshair at all\n;   Custom           - Define your own replacements (in the area below)\nsReplaceMode = Default\n\n; Colorize your crosshair by type! (leave empty for default crosshair widget color)\nsColorPistol      = \nsColorCutter      = \nsColorDot         = \nsColorShotgun     = \nsColorRifle       = \nsColorLaser       = \nsColorTool        = \nsColorInteraction = \nsColorCommand     = \n\n; Scale your crosshair by type! (in percent, default is the widgets scale)\niScalePistol      = \niScaleCutter      = \niScaleDot         = \niScaleShotgun     = \niScaleRifle       = \niScaleLaser       = \niScaleTool        = \niScaleInteraction = \niScaleCommand     = \n\n; Note: ALL following replacements are only enabled if sReplaceMode is \"Custom\"\n; Available crosshair types: None, Pistol, Cutter, Dot, Shotgun, Rifle, Laser, Tool, Interaction, Command\n[Crosshair.CustomReplacements]\n; Custom replacements for 1st person (needs sReplaceMode to be \"Custom\")\nsReplacePistol      = Pistol\nsReplaceCutter      = Cutter\nsReplaceDot         = Dot\nsReplaceShotgun     = Shotgun\nsReplaceRifle       = Rifle\nsReplaceLaser       = Laser\nsReplaceTool        = Tool\nsReplaceInteraction = Interaction\nsReplaceCommand     = Command\n\n[Crosshair.CustomReplacements_Aiming]\n; Custom replacements when aiming in 1st person (needs sReplaceMode to be \"Custom\")\nsReplacePistol      = Pistol\nsReplaceCutter      = Cutter\nsReplaceDot         = Dot\nsReplaceShotgun     = Shotgun\nsReplaceRifle       = Rifle\nsReplaceLaser       = Laser\nsReplaceTool        = Tool\nsReplaceInteraction = Interaction\nsReplaceCommand     = Command\n\n[Crosshair.CustomReplacements_3rdPerson]\n; Custom replacements in 3rd person (needs sReplaceMode to be \"Custom\")\nsReplacePistol      = Pistol\nsReplaceCutter      = Cutter\nsReplaceDot         = Dot\nsReplaceShotgun     = Shotgun\nsReplaceRifle       = Rifle\nsReplaceLaser       = Laser\nsReplaceTool        = Tool\nsReplaceInteraction = Interaction\nsReplaceCommand     = Command\n\n[Crosshair.CustomReplacements_3rdPerson_Aiming]\n; Custom replacements when aiming in 3rd person (needs sReplaceMode to be \"Custom\")\nsReplacePistol      = Pistol\nsReplaceCutter      = Cutter\nsReplaceDot         = Dot\nsReplaceShotgun     = Shotgun\nsReplaceRifle       = Rifle\nsReplaceLaser       = Laser\nsReplaceTool        = Tool\nsReplaceInteraction = Interaction\nsReplaceCommand     = Command\n\n\n[HitAndKill]\n; Hit and kill markers on the crosshair\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = \nbForceColor = 0\n; Re-position the widget - default position: 960, 538\nfPositionX = 960\nfPositionY = 538\nfScale = 100\nfRotation = 0\n\n[ExplosiveIndicator]\n; Shows an indicator when an explosive thing is near you\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = \nbForceColor = 0\n; Re-position the widget - default position: 960, 540\nfPositionX = 960\nfPositionY = 540\nfScale = 100\nfRotation = 0\n\n[DirectionalHit]\n; Displays a indicator from where you were hit\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = \nbForceColor = 0\n; Re-position the widget - default position: 960, 540\nfPositionX = 960\nfPositionY = 540\nfScale = 100\nfRotation = 0\n\n[StealthMeter]\n; Shows your current stealth level\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = 255, 255, 255\nbForceColor = 0\n; Re-position the widget - default position: 960, 128\nfPositionX = 960\nfPositionY = 128\nfScale = 100\nfRotation = 0\n\n; Override color for the various stealth modes\nsBarColorHidden = \nsBarColorCaution =\nsBarColorDetected =\nsBarColorDanger =\n\n[ArtifactPowers]\n; Artifact powers widget. You know what it is when you are at that stage in the game.\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = \nbForceColor = 0\n; Re-position the widget - default position: 960, 540\nfPositionX = 960\nfPositionY = 540\nfScale = 100\nfRotation = 0\n\n[SocialCommands]\n; Widget for social interactions (requires skill)\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = \nbForceColor = 0\n; Re-position the widget - default position: 1090, 190\nfPositionX = 1090\nfPositionY = 190\nfScale = 100\nfRotation = 0\n\n[CrewBuff]\n; Crew buffs widget\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = \nbForceColor = 0\n; Re-position the widget - default position: 1851, 139\nfPositionX = 1851\nfPositionY = 139\nfScale = 100\nfRotation = 0\n\n[QuestMarker]\n; The floating quest marker on the HUD\nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = 255, 255, 255\nbForceColor = 0\n\n[HitDamage]\n; Shows hit damage\nbEnabled = 1\n\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = 255, 255, 255\nbForceColor = 0\n\n[EnemyHealth]\n; Contains the enemy health bars. \nbEnabled = 1\n; Colorize the widget. If the value is empty, the default HUD color will be used.\nsColor = 255, 255, 255\nbForceColor = 0\n\n\n; ========================\n;  Doc: Available columns \n; =======================\n; AMMO - Show used ammo type\n; AMMO_ROUNDS - Show available rounds for ammo type\n; DR - Damage resistance\n; DMG - Weapon damage\n; DPS - Weapon damage per second (Burst DPS, so without reload-time)\n; FAV - Shows your favorite assignment number\n; MASS - Weight\n; MASS_STACK - Weight per stack\n; RARITY - Shows the rarity of the item (rare, epic, legendary for weapon/apparel and common, uncommon, rare,... for other items)\n; VALUE - VALUE\n; VALUE_STACK - Value per stack\n; VPM - Value / Mass\n\n; Detail columns for weapon\n; WMANUFACTURER - Shows the manufacturer of the weapon\n; WACC - Weapon accuracy\n; WBASENAME - Shows the base name of the weapon (e.g. Eon, Grendel, Maelstrom,...)\n; WMAG - Weapon ammo capacity\n; WMODS - Weapon mod slots ( used / max )\n; WRANGE - Weapon range\n; WROF - Weapon rate of fire (gund) / Attack speed (melee)\n; WTYPE - Weapon Type\n\n; Detail columns for armor\n; ATHERMAL - Armor thermal\n; ACORROSIVE - Armor corrosive\n; AAIRBORNE - Armor airborne\n; ARADIATION - Armor radiation\n\n; Detail columns for Damage\n; PHYS - Weapon physical damage / Armor physical resistance\n; ENGY - Weapon energy damage / Armor energy resistance\n; EM - Weapon EM damage / Armor EM resistance\n; ELEC - Weapon electrical damage / Armor electrical resistance [Currently unused in the game]\n\n"
};

window.alternateOSDataPackages['StarUI Inventory'] = {
	json: {
		"modName": "StarUI Inventory",
		"author": "m8r98a4f2",
		"displayName": "StarUI Inventory",
		"iniFileDefault": "Interface\\StarUI Inventory (default).ini",
		"iniFile": "Interface\\StarUI Inventory.ini",
		"teaserImage": "config.images/Inventory/StarUI_Inventory_Teaser.jpg",
		"version": 1,
		"pages": [
			{
				"pageDisplayName": "Category list",
				"content": [
					{ "type" : "section", "text" : "Category list" }
					,{ "type": "switcher", "text": "Category sidebar", "help": "Show a category sidebar on the left in Inventory", "id": "bLeftCategorySidebar:StarUI Inventory"}
					,{ "type": "switcher", "text": "Subcategory sidebar", "help": "Show a subcategory sidebar for more filtering", "id": "bLeftSubCategorySidebar:StarUI Inventory"}
					,{ "type": "switcher", "text": "Collapse space for sidebar", "help": "Collapse space for subcategory sidebar when no subcategories available (will move the main items list a bit)", "id": "bLeftSubCategorySidebarCollapse:StarUI Inventory"}
					,{ "type": "slider", "text": "Font Size for main text in category entries", "help": "Font Size for main text in category entries (Default: 20)", "id": "iCategoryListFontSize:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "slider", "text": "Font Size for subtitle text in category entries", "help": "Font Size for subtitle text in category entries (Default: 20)", "id": "iCategoryListSubtitleFontSize:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "slider", "text": "Font Size for count/mass value", "help": "Font Size for count/mass in category entries (Default: 18)", "id": "iCategoryListCountMassFontSize:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "slider", "text": "Font Size for count/mass label", "help": "Font Size for count/mass in category entries (Default: 9)", "id": "iCategoryListCountMassLabelFontSize:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "slider", "text": "Category entry height", "help": "Height of a category entry. Should be min. 40", "id": "iCatListEntryHeight:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "slider", "text": "Max characters per line", "help": "Max characters per line for category text", "id": "iCategoryListMaxChars:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "switcher", "text": "Show category mass", "help": "Show category mass", "id": "bShowCatMass:StarUI Inventory"}
					,{ "type": "switcher", "text": "Switch category name and equipped item name", "help": "Player inventory: Switch the category name and equipped item name to make it more consistent", "id": "bPlayerInventoryCatListSwitchCatNameAndItem:StarUI Inventory"}
					]
				},
				{
					"pageDisplayName" : "Item list",
					"content" : [
						{ "type" : "section", "text" : "Item list" }
						,{ "type": "switcher", "text": "Tag icon for item", "help": "Show tag icon for item (in items list) - previously bShowItemCategoryIcon", "id": "bShowItemTagIcon:StarUI Inventory"}
					,{ "type": "switcher", "text": " - Colored", "help": "Use colored item icons", "id": "bShowHeartFavorite:StarUI Inventory"}
					,{ "type": "switcher", "text": "Favorite assignment number", "help": "Show your favorite assignment number in the items heart icon", "id": "bItemTagColorized:StarUI Inventory"}
					
					,{ "type": "slider", "text": "Font size", "help": "Font size (Default: 20)", "id": "iItemListFontSize:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "slider", "text": "Item entry height", "help": "Height of an item entry (Min 26)", "id": "iItemListEntryHeight:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "slider", "text": "Cell padding", "help": "Extra padding on left and right in the cells", "id": "iItemListColPadding:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "slider", "text": "Cell background opaqueness", "help": "Make the item list opaque, so it's easier to read with item model in background. Value in percent.", "id": "iItemListOpaqueBackground:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type": "dropdown", "text": "Text font", "help": "6 Consolas (Contains only ASCII characters for EN)", "id": "iUseFont:StarUI Inventory", 
						"valueOptions" : {"options" : ["Default","NB Architekt Light","NB Architekt","NB Grotesk R Semibold","NB Grotesk R Bold","Arial (EN only)","Consolas (EN only)"]}}
				]
			},
			{
				"pageDisplayName" : "Coloration",
				"content" : [
					{ "type" : "section", "text" : "Inventory colors" }
					,{"type" : "textinput", "text": "Default inventory color", "help": "Will be used if no other color is specified.", "id": "sInventoryDefaultColor:StarUI Inventory", "typeSpecial" : "color"}
	
					,{ "type" : "section", "text" : "Overall color by inventory type" }
					,{"type" : "textinput", "text": "Players inventory", "help": "", "id": "sInventoryPlayerColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Container", "help": "", "id": "sInventoryContainerColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Container - Stealing", "help": "", "id": "sInventoryContainerStealColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Ship cargo", "help": "", "id": "sInventoryShipColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Companion", "help": "", "id": "sInventoryCompanionColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Trader - Buy", "help": "", "id": "sInventoryBuyColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Trader - Sell", "help": "", "id": "sInventorySellColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Trader - Sell from ship", "help": "", "id": "sInventoryShipSellColor:StarUI Inventory", "typeSpecial" : "color"}
	
					,{ "type" : "section", "text" : "Colorize elements" }
					,{"type" : "textinput", "text": "Category list", "help": "", "id": "sCategoryListColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Subcategory list", "help": "", "id": "sSubcategoryListColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Item list", "help": "", "id": "sItemListColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Item card", "help": "", "id": "sItemCardColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Mass panel", "help": "", "id": "sMassPanelColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Mass panel - encumbered", "help": "", "id": "sMassPanelEncumberedColor:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Button bar", "help": "", "id": "sButtonHintsColor:StarUI Inventory", "typeSpecial" : "color"}
	
					,{ "type" : "section", "text" : "Rarity colors" }
					,{"type" : "textinput", "text": "Rare", "help": "Override rare color", "id": "sRarityColorRare:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Epic", "help": "Override epic color", "id": "sRarityColorEpic:StarUI Inventory", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Legendary", "help": "Override legendary color", "id": "sRarityColorLegendary:StarUI Inventory", "typeSpecial" : "color"}
		
				]
			},
			{
				"pageDisplayName" : "Mass transfer",
				"content" : [
					{ "type" : "section", "text" : "Mass transfer" }
					,{ "type": "switcher", "text": "Enable mass transfer", "help": "Enable mass transfer from and to container and selling to vendor", "id": "bEnableMassTransfer:StarUI Inventory"}
					,{ "type": "switcher", "text": " - Enable mass buy", "help": "Enable mass buying from vendor", "id": "bEnableMassTransferBuy:StarUI Inventory"}
					,{ "type": "switcher", "text": "No favorites", "help": "Don't transfer favorites or equipped!", "id": "bMassTransferNoFavorites:StarUI Inventory"}
					,{ "type": "switcher", "text": "No equipped", "help": "bMassTransferNoEquipped", "id": "bMassTransferNoEquipped:StarUI Inventory"}
					,{ "type": "textinput", "text": "Exclusion list (FormIDs)", "help": "This list doesn't applies when you mass-transfering into your inventory (So you can still loot everything)", "id": "sMassTransferIgnoreFormIDs:StarUI Inventory"}
					,{ "type": "switcher", "text": "Only sell for money", "help": "Stop mass selling when vendor is out of credits", "id": "bMassTransferOnlySellForCredits:StarUI Inventory"}
				]
			},
			{
				"pageDisplayName" : "Quality of live",
				"content" : [
					{ "type" : "section", "text" : "Quality of live" }
					,{ "type": "switcher", "text": "Instant open/close", "help": "Instant open/close animation", "id": "bInstantOpenCloseAnimation:StarUI Inventory"}
					,{ "type": "switcher", "text": "TAB directly to game (Player inventory)", "help": "Should the TAB key in inventory view go back to the game (instead of it's normal behavior to go to the wheel menu)", "id": "bTabToGame:StarUI Inventory"}
					,{ "type": "switcher", "text": "TAB directly to game (Container/Ship cargo)", "help": "Should the TAB key in container view go back to te game (like when viewing your ship's cargo)", "id": "bTabToGameContainer:StarUI Inventory"}
					,{ "type": "switcher", "text": "TAB exits in item list", "help": "Should the TAB close the inventory when in the item list", "id": "bTabInItemListToGame:StarUI Inventory"}
					,{ "type": "switcher", "text": "Enlarge scrollbar", "help": "Enlarge the scrollbar, so you can actually grap it with the mouse!", "id": "bEnlargeScrollBar:StarUI Inventory"}
					,{ "type": "slider", "text": "Mouse wheel scroll", "help": "How much should a wheel step scroll?", "id": "iListMouseWheelScrollAmount:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 50, "step" : 1 }}
					,{ "type": "switcher", "text": "Disable Vignette effect", "help": "Remove the vignette effect (shadow effect on the screen edges)", "id": "bDisableVignette:StarUI Inventory"}
					,{ "type": "switcher", "text": "Mass panel - Show stolen indicator", "help": "Show stolen and contraband indicators in mass panel - shows you if that inventory contains stolen or contraband items", "id": "bMassPanelShowStolen:StarUI Inventory"}
					,{ "type": "switcher", "text": "Mass panel - Show contraband indicator", "help": "Show stolen and contraband indicators in mass panel - shows you if that inventory contains stolen or contraband items", "id": "bMassPanelShowContraband:StarUI Inventory"}
					,{ "type": "switcher", "text": "Show FormID", "help": "Show FormID of item in ItemCard (Inventory only)", "id": "bItemCardShowFormId:StarUI Inventory"}
					,{ "type": "slider", "text": "Delay inventory update", "help": "Performance: Delays inventory update requests to cummulate multiple requests by the game engine into a single one. Value in milliseconds. Increase for bigger inventories. Default:10", "id": "iInventoryUpdateDelay:StarUI Inventory",
					"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{ "type" : "section", "text" : "Scales" }
					,{ "type": "switcher", "text": "Auto-adjust for Large Font Mode", "help": "Auto-adjust values when game setting 'Large Font Mode' is activated", "id": "bAutoAdjustToLargeFontMode:StarUI Inventory"}
					,{ "type": "slider", "text": "Item card scale", "help": "Scaling (size) for item cards (in percent)", "id": "iItemCardScale:StarUI Inventory",
					"valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
					,{ "type": "slider", "text": "Button bar scale", "help": "Scaling (size) for the button bar (in percent)", "id": "iButtonBarScale:StarUI Inventory",
					"valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
					,{ "type": "slider", "text": "Mass panel scale", "help": "Scaling (size) for the mass panel (in percent)", "id": "iMassPanelScale:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
					]
				},
				{
					"pageDisplayName" : "Columns",
					"content" : [
					{ "type" : "section", "text" : "Columns" }
					,{ "type": "switcher", "text": "Show QTY", "help": "Show QTY above item counts as column title", "id": "bShowCountTitle:CategoryColumns"}
					,{ "type": "switcher", "text": "Add toggle folding button [<]", "help": "Show toggle button to enable/disable additional columns", "id": "bShowColumnsToggleButton:CategoryColumns"}
					,{ "type": "switcher", "text": " - Starts folded", "help": "Default setting (when enabled)", "id": "bShowColumnsToggleButtonDefault:CategoryColumns"}
					,{ "type": "switcher", "text": "Add temporary columns button [+]", "help": "Show a button to add temporary columns in the game (lasts until inventory is closed)", "id": "bShowColumnsAddTemporaryButton:CategoryColumns"}
	
					,{ "type": "textinput", "text": "All", "help": "All will be used as fallback for any not specified", "id": "sAll:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Weapons", "help": "", "id": "sWeapons:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Apparel", "help": "Apparel will be used as fallback for Spacesuits, Packs and Helmets", "id": "sApparel:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Aid", "help": "", "id": "sAid:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Ammo", "help": "", "id": "sAmmo:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Throwables", "help": "", "id": "sThrowables:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "NewItems", "help": "", "id": "sNewItems:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Spacesuits", "help": "", "id": "sSpacesuits:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Packs", "help": "", "id": "sPacks:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Helmets", "help": "", "id": "sHelmets:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Notes", "help": "", "id": "sNotes:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Resources", "help": "", "id": "sResources:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Misc", "help": "", "id": "sMisc:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
	
				]
			},
			{
				"pageDisplayName" : "Columns sort",
				"content" : [
					{ "type" : "section", "text" : "Columns sort" }
					,{ "type" : "text", "html": true, "text" : "<font color='#aaaaaa'>When bAllowSecondarySortKey is enabled you can specify a secondary sort key by adding another COLUMN after the first (separated by comma)</font>" }
					,{ "type": "switcher", "text": "Allow secondary sort key", "help": "Should the secondary sort key are customizable. Either by specified in this INI or the previously clicked column.\nIf disabled the secondary sort key is the name.", "id": "bAllowSecondarySortKey:CategoryColumns"}
					
					,{ "type": "textinput", "text": "Global default", "help": "Defines which column sort should be active by default. Leave empty for vanilla sorting. Default: TAG (Sorts by special column item tag, then name)", "id": "sDefaultSort:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "All", "help": "", "id": "sDefaultSortAll:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Weapons", "help": "", "id": "sDefaultSortWeapons:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Spacesuits", "help": "", "id": "sDefaultSortSpacesuits:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Backpacks", "help": "", "id": "sDefaultSortPacks:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Helmets", "help": "", "id": "sDefaultSortHelmets:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Apparel", "help": "", "id": "sDefaultSortApparel:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Throwables", "help": "", "id": "sDefaultSortThrowables:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Ammo", "help": "", "id": "sDefaultSortAmmo:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Aid", "help": "", "id": "sDefaultSortAid:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Notes", "help": "", "id": "sDefaultSortNotes:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Resources", "help": "", "id": "sDefaultSortResources:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "Misc", "help": "", "id": "sDefaultSortMisc:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					,{ "type": "textinput", "text": "New items", "help": "", "id": "sDefaultSortNewItems:CategoryColumns", "typeSpecial" : "columns",
						"availableColumns": ["TAG", "MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "FAV", "RARITY","EQUIPPED", "CONTRABAND", "STOLEN", "QTY", "FORMID", "TREATMENT",
							"", "TARGET_INV_COUNT", "SHIP_INV_COUNT", "PLAYER_INV_COUNT", "CONTAINER_INV_COUNT", "TOTAL_INV_COUNT"]}
					
				]
			},
			{
				"pageDisplayName" : "Column widths",
				"content" : [
					{ "type" : "section", "text" : "Column widths" }
					,{ "type": "slider", "text": "Main column width", "help": "Width of the main name column", "id": "iItemListMainColWidth:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 600, "step" : 5 }}
					,{ "type": "slider", "text": "Extra column width", "help": "Default column width for additional columns", "id": "iItemListExtraColWidth:StarUI Inventory",
						"valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
	
					,{ "type" : "section", "text" : "Basic columns" }
					,{"type" : "slider", "text": "MASS", "id": "iColWidthMASS:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "MASS_STACK", "id": "iColWidthMASS_STACK:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "VALUE", "id": "iColWidthVALUE:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "VALUE_STACK", "id": "iColWidthVALUE_STACK:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "VPM", "id": "iColWidthVPM:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "TYPE", "id": "iColWidthTYPE:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					
					,{ "type" : "section", "text" : "Weapon columns" }
					,{"type" : "slider", "text": "AMMO", "id": "iColWidthAMMO:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "AMMO_ROUNDS", "id": "iColWidthAMMO_ROUNDS:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "RARITY", "id": "iColWidthRARITY:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WMANUFACTURER", "id": "iColWidthWMANUFACTURER:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WACC", "id": "iColWidthWACC:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WBASENAME", "id": "iColWidthWBASENAME:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WMAG", "id": "iColWidthWMAG:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WMODS", "id": "iColWidthWMODS:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WRANGE", "id": "iColWidthWRANGE:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WROF", "id": "iColWidthWROF:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WTYPE", "id": "iColWidthWTYPE:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
	
					,{ "type" : "section", "text" : "Damage columns" }
					,{"type" : "slider", "text": "DAMAGES", "id": "iColWidthDAMAGES:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "PHYS", "id": "iColWidthPHYS:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "ENGY", "id": "iColWidthENGY:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "EM", "id": "iColWidthEM:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "DR", "id": "iColWidthDR:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "DMG", "id": "iColWidthDMG:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "DPS", "id": "iColWidthDPS:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
	
					,{ "type" : "section", "text" : "Resistance columns" }
					,{"type" : "slider", "text": "ATHERMAL", "id": "iColWidthATHERMAL:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "AAIRBORNE", "id": "iColWidthAAIRBORNE:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "ACORROSIVE", "id": "iColWidthACORROSIVE:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "ARADIATION", "id": "iColWidthARADIATION:CategoryColumns", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
	
					,{ "type" : "section", "text" : "Inventory columns" }
	
	
				]
			}
		]
	},
	iniContentDefault: "[StarUI Inventory]\n\n; -----------------------------------\n; StarUI Inventory configuration file\n; -----------------------------------\n;\n; Allows you to customize many aspects of the StarUI Inventory mod.\n;\n; Tips:\n;   * You can edit this file while the game is running. Just close an re-open the inventory to load the new settings!\n;   * You can copy this file to \"StarUI Inventory.ini\" to store your own settings which won't be overwritten by updates!\n;     If you like it clean: Both files will be read, so you only need to put changed settings in your \"StarUI Inventory.ini\".\n;     Note: Make sure your new INI include the sections [StarUI Inventory] and [CategoryColumns] when you like to change settings in these. \n; \n\n; Auto-adjust values when game setting \"Large Font Mode\" is activated\n; Please note, that the StarUI Inventory shows much more information than the vanilla inventory, so there may be simply not enough place to show everything.\nbAutoAdjustToLargeFontMode = 1\n\n; Player inventory: Switch the category name and equipped item name\nbPlayerInventoryCatListSwitchCatNameAndItem = 1\n\n; Show a category sidebar on the left in Inventory\nbLeftCategorySidebar = 1\n\n; Show a subcategory sidebar for more filtering\nbLeftSubCategorySidebar = 1\n\n; Collapse space for subcategory sidebar when no subcategories available (will move the main items list a bit)\nbLeftSubCategorySidebarCollapse = 1\n\n; Font Size for main text in category entries (Default: 20)\niCategoryListFontSize = 20\n\n; Font size for subtitle in category entries\niCategoryListSubtitleFontSize = 20\n\n; Font Size for count/mass in category entries (Default: 18)\niCategoryListCountMassFontSize = 18\n\n; Font Size for count/mass in category entries (Default: 9)\niCategoryListCountMassLabelFontSize = 9\n\n; Height of a category entry. Should be min. 40\niCatListEntryHeight = 55\n\n; Max characters per line for category text\niCategoryListMaxChars = 40\n\n; Show tag icon for item (in items list) - previously bShowItemCategoryIcon\nbShowItemTagIcon = 1\n\n; Use colored item icons\nbItemTagColorized = 1\n\n; Show your favorite assignment number in the items heart icon\nbShowHeartFavorite = 1\n\n; Font size (Default: 20)\niItemListFontSize = 20\n\n; Height of an item entry (Min 26)\niItemListEntryHeight = 30\n\n; Width of the main name column\niItemListMainColWidth = 417\n\n; Width of the extra columns\niItemListExtraColWidth = 75\n\n; Extra padding on left and right in the cells\niItemListColPadding = 8\n\n; Make the item list opaque, so it's easier to read with item model in background. Value in percent.\niItemListOpaqueBackground = 66\n\n; Scaling (size) for other parts of the inventory interface (in percent)\niItemCardScale = 100\niButtonBarScale = 100\niMassPanelScale = 100\n\n; Remove the vignette effect (shadow effect on the screen edges)\nbDisableVignette = 0\n\n; Fonts\n; Available fonts: \n; 0 Default (\"NB Architekt\")\n; 1 NB Architekt Light\n; 2 NB Architekt\n; 3 NB Grotesk R Semibold\n; 4 NB Grotesk R Bold\n; 5 Arial (Contains only ASCII characters for EN)\n; 6 Consolas (Contains only ASCII characters for EN)\niUseFont = 0\n\n; Quality Of Life!\n\n; Show category mass\nbShowCatMass = 1\n\n; Show stolen and contraband indicators in mass panel - shows you if that inventory contains stolen or contraband items\nbMassPanelShowStolen = 0\nbMassPanelShowContraband = 1\n\n; Enable mass transfer from and to container and selling to vendor\nbEnableMassTransfer = 1\n; Enable mass buying from vendor\nbEnableMassTransferBuy = 1\n\n; Don't transfer favorites or equipped!\nbMassTransferNoFavorites = 1\nbMassTransferNoEquipped = 1\n\n; Ignore certain items for mass transfer to other inventories (as FormID). Multiple entries separated by comma (Default: Ignore Digipack, Cutter and a mission item which can be sold but shouldn't)\n; This list doesn't applies when you mass-transferring into your inventory (So you can still loot everything)\nsMassTransferIgnoreFormIDs = 0000000A, 00016758, 000ECCED\n; Tip: Beside this INI file there is a file StarUI Inventory - FormIDs.txt containing collected FormIDs to ignore certain groups of items. \n\n; Stop mass selling when vendor is out of credits\nbMassTransferOnlySellForCredits = 1\n\n; Enlarge the scrollbar, so you can actually grap it with the mouse! \nbEnlargeScrollBar = 1\n\n; How much should a wheel step scroll?\niListMouseWheelScrollAmount = 3\n\n; Should the <TAB> key in inventory view go back to the game (instead of it's normal behavior to go to the wheel menu)\nbTabToGame = 1\n\n; Should the <TAB> key in container view go back to te game (like when viewing your ship's cargo)\nbTabToGameContainer = 1\n\n; Should the <TAB> close the inventory when in the item list\nbTabInItemListToGame = 0\n\n; Instant open/close animation\nbInstantOpenCloseAnimation = 0\n\n; Show FormID of item in ItemCard (Inventory only)\nbItemCardShowFormId = 0\n\n; Performance: Delays inventory update requests to cummulate multiple requests by the game engine into a single one. Value in milliseconds. Increase for bigger inventories. Default:10\niInventoryUpdateDelay = 10\n\n; ======\n; Colors\n; ======\n; The colors are specified as \"red, green, blue(, alpha)\" where alpha is optional. \n; RGB values are from 0 to 255. Alpha is from 0 to 100 (percent).\n\n; Default inventory color (washed out color, if you want to use standard rarity colors: 164, 190, 222)\nsInventoryDefaultColor = 122, 192, 244\n\n; Overall color by inventory type\nsInventoryPlayerColor = 122, 192, 244\nsInventoryContainerColor = 192, 192, 122\nsInventoryContainerStealColor = 196, 96, 96\nsInventoryShipColor = 128, 192, 192\nsInventoryCompanionColor = 164, 128, 196\nsInventoryBuyColor = 128, 196, 128\nsInventorySellColor = 196, 196, 128\nsInventoryShipSellColor = 196, 164, 164\n\n; Color elements individually (will override default and per-type color)\nsCategoryListColor = \nsSubcategoryListColor = \nsItemListColor = \nsMassPanelColor = \nsMassPanelEncumberedColor = 196, 64, 64\nsButtonHintsColor = \n; Item card coloring (Keep in mind: the item cards has own colors, which will look different when using a new overall item card color)\nsItemCardColor = \n\n; Rarity colors (Defaults: rare=115,204,223 epic=154,123,255 legendary=238,193,98)\nsRarityColorRare = 80, 136, 244\nsRarityColorEpic = \nsRarityColorLegendary = \n\n[CategoryColumns]\n\n; Show QTY above item counts as column title\nbShowCountTitle = 1\n\n; Show toggle button to enable/disable additional columns \nbShowColumnsToggleButton = 1\n; Default setting (when enabled)\nbShowColumnsToggleButtonDefault = 0\n\n; Show a button to add temporary columns in the game (lasts until inventory is closed)\nbShowColumnsAddTemporaryButton = 1\n\n; Defines which column sort should be active by default. Leave empty for vanilla sorting. Default: TAG (Sorts by special column item tag, then name)\n; When bAllowSecondarySortKey is enabled, you can specify a secondary key, e.g.: RARITY, VPM\nsDefaultSort = TAG\n\n; Should the secondary sort key are customizable. Either by specified in this INI or the previously clicked column. \n; If disabled the secondary sort key is the name.\nbAllowSecondarySortKey = 0\n\n; Configure your own table! \n\n; Available columns: \n; (Experimental) AID_HP - Shows hp effects of aid items (currently only working in EN and DE)\n; AMMO - Show used ammo type\n; AMMO_ROUNDS - Show available rounds for ammo type\n; QTY - Shows a separate column for QTY. Will remove the default QTY in the name cell.\n; CONTRABAND - Shows if the item is contraband\n; DR - Damage resistance\n; DMG - Weapon damage\n; DPS - Weapon damage per second (Burst DPS, so without reload-time)\n; EQUIPPED - Shows if the item is equipped\n; FAV - Shows your favorite assignment number\n; MASS - Weight\n; MASS_STACK - Weight per stack\n; RARITY - Shows the rarity of the item (rare, epic, legendary for weapon/apparel and common, uncommon, rare,... for other items)\n; (Experimental) TARGET_INV_COUNT - Shows the amount of that item in the transfer target inventory (So when buying how many you already have)\n; PLAYER_INV_COUNT - Shows your inventory count of an item (Only visible when useful and the inventory data is available)\n; SHIP_INV_COUNT - Shows your ships cargo count of an item (Only visible when useful and the inventory data is available)\n; CONTAINER_INV_COUNT - Shows the item count in the container when you are transferring into a container.\n; STOLEN - Shows if the item is stolen\n; TREATMENT - Shows the treatment for an aid item\n; TOTAL_INV_COUNT - Add a column OWNED/SHIP/PLAYER (which depends on situation) - Summarizes the columns PLAYER_INV_COUNT and SHIP_INV_COUNT. Will be automatically converted to player or ship column in their inventory\n; VALUE - VALUE\n; VALUE_STACK - Value per stack\n; VPM - Value / Mass\n\n; Detail columns for weapon\n; WMANUFACTURER - Shows the manufacturer of the weapon\n; WACC - Weapon accuracy\n; WBASENAME - Shows the base name of the weapon (e.g. Eon, Grendel, Maelstrom,...)\n; WMAG - Weapon ammo capacity\n; WMODS - Weapon mod slots ( used / max )\n; WRANGE - Weapon range\n; WROF - Weapon rate of fire (gund) / Attack speed (melee)\n; WTYPE - Weapon Type\n\n; Detail columns for armor\n; ATHERMAL - Armor thermal\n; ACORROSIVE - Armor corrosive\n; AAIRBORNE - Armor airborne\n; ARADIATION - Armor radiation\n\n; Detail columns for Damage\n; PHYS - Weapon physical damage / Armor physical resistance\n; ENGY - Weapon energy damage / Armor energy resistance\n; EM - Weapon EM damage / Armor EM resistance\n; ELEC - Weapon electrical damage / Armor electrical resistance [Currently unused in the game]\n\n\nsWeapons = DMG, DPS, MASS, VALUE, VPM, AMMO\n; Apparel will be used as fallback for Spacesuits, Packs and Helmets\nsApparel = DR, MASS, VALUE, VPM\n; All will be used as fallback for any not specified\nsAid = MASS, VALUE, VPM, TREATMENT, TOTAL_INV_COUNT, CONTAINER_INV_COUNT\nsAmmo = VALUE, TOTAL_INV_COUNT, CONTAINER_INV_COUNT\nsThrowables = DMG, MASS, VALUE, VPM, TOTAL_INV_COUNT, CONTAINER_INV_COUNT\nsAll = MASS, VALUE, VPM, TOTAL_INV_COUNT, CONTAINER_INV_COUNT\n; If you like to specify the columns for more categories, just remove the \";\" in the following lines: \n;sNewItems = MASS, VALUE, VPM, TOTAL_INV_COUNT\n;sSpacesuits = DR, MASS, VALUE, VPM, TOTAL_INV_COUNT\n;sPacks = DR, MASS, VALUE, VPM, TOTAL_INV_COUNT\n;sHelmets = DR, MASS, VALUE, VPM, TOTAL_INV_COUNT\n;sNotes = MASS, VALUE, VPM, TOTAL_INV_COUNT\n;sResources = MASS, VALUE, VPM, TOTAL_INV_COUNT\n;sSpells = MASS, VALUE, VPM, TOTAL_INV_COUNT\n;sMisc = MASS, VALUE, VPM, TOTAL_INV_COUNT\n\n; Define separate default sortings per category (Remove the \";\" before the category line to specify it)\n; To sort by the special QTY column (inside the name cell) you can use COUNT\n; When bAllowSecondarySortKey is enabled you can specify a secondary sort key by adding another COLUMN after the first (separated by comma)\n;sDefaultSortWeapons = DPS, TAG\n;sDefaultSortSpacesuits = TAG\n;sDefaultSortPacks = TAG\n;sDefaultSortHelmets = TAG\n;sDefaultSortApparel = DR\n;sDefaultSortThrowables = TAG \n;sDefaultSortAmmo = COUNT \n;sDefaultSortAid = TAG\n;sDefaultSortNotes = TAG\n;sDefaultSortResources = TAG \n;sDefaultSortMisc = TAG\n;sDefaultSortNewItems = TAG\n;sDefaultSortAll = TAG\n\n; Define individual column widths for any column you like! \n; Define more in the schema iColWidth... (e.g. for DMG iColWidthDMG)\niColWidthAMMO = 135\niColWidthRARITY = 110\niColWidthWMANUFACTURER = 200\niColWidthSTOLEN = 50\niColWidthCONTRABAND = 50\niColWidthPHYS = 60\niColWidthENGY = 60\niColWidthEM = 60\niColWidthELEC = 60\niColWidthFAV = 50\n\n"
};

window.alternateOSDataPackages['StarUI Workbench'] = {
	json: {
		"modName" : "StarUI Workbench",
		"author" : "m8r98a4f2",
		"displayName" : "StarUI Workbench",
		"iniFileDefault" : "Interface\\StarUI Workbench (default).ini", 
		"iniFile" : "Interface\\StarUI Workbench.ini", 
		"teaserImage": "config.images/Workbench/StarUI_Workbench1.jpg",
		"version": 1,
		"pages": [
			{
				"pageDisplayName" : "Basic settings",
				"content" : [
					
					{ "type" : "section", "text" : "Options" }
	
					,{"type" : "switcher", "text": "Instant open/close", "help": "Instant open/close animation (Note: This won't disable the character animation)", "id": "bInstantOpenCloseAnimation:StarUI Workbench"}
					,{"type" : "dropdown", "text": "Text font", "id": "iUseFont:StarUI Workbench", "valueOptions" : {"options" : ["Default","NB Architekt Light","NB Architekt","NB Grotesk R Semibold","NB Grotesk R Bold","Arial (EN only)","Consolas (EN only)"]}}
					
					,{"type" : "slider", "text": "List entry height", "id": "iListEntryHeight:StarUI Workbench",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{"type" : "slider", "text": "List entry font size", "id": "iListEntryFontSize:StarUI Workbench",
						"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}
					,{"type" : "slider", "text": "Left and right padding of list cells", "id": "iListEntryPadding:StarUI Workbench",
						"valueOptions" : {"min" : 0, "max" : 20, "step" : 1 }}
	
						,{ "type" : "section", "text" : "Icons" }
						,{"type" : "switcher", "text": "Show icons","help":"Show tag icon for item (in items list)", "id": "bShowItemTagIcon:StarUI Workbench"}
						,{"type" : "switcher", "text": "Show tracking icon", "help": "Show tracking icon (for trackable items, e.g. craftables or in weapons/armor mod list)", "id": "bShowTrackingIcon:StarUI Workbench"}
					
				]
			},
			{
				"pageDisplayName" : "Weapons/Armor",
				"content" : [    { "type" : "section", "text" : "Weapon and armor workbenches" }
					,{"type" : "switcher", "text":"Stacking sub-lists", "help": "Should the sub-lists be positioned a bit to the right-bottom? (disabled if your layout has specific positions for the sub-lists)", "id": "bSubListsStackEffect:StarUI Workbench"}
					,{"type" : "switcher", "text": "Vanilla icons","help":"Use the bench native item icons (instead of StarUI sorting tag icons)", "id": "bUseVanillaItemIcons:StarUI Workbench"}
					,{"type" : "switcher", "text": "Colored icons","help":"Use colored item icons (only for StarUI item sorting tags)", "id": "bItemTagColorized:StarUI Workbench"}
					,{"type" : "switcher", "text": "Add favorite icon", "help":"Add a favorite item icon to weapons in quickslots", "id": "bShowFavIcon:StarUI Workbench"}
					,{"type" : "switcher", "text": "Use rarity color for weapon/armor", "id": "bShowRarityColors:StarUI Workbench"}
					
					,{"type" : "textinput", "text": "Columns for the weapon workbench", "id": "sWeaponBenchInvListColumns:StarUI Workbench", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM", "TYPE",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "RESISTANCES", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "RARITY"]}
					,{"type" : "textinput", "text": "Columns for the armor workbench", "id": "sArmorBenchInvListColumns:StarUI Workbench", "typeSpecial" : "columns",
						"availableColumns": ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM", "TYPE",
							"", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
							"", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
							"", "RESISTANCES", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
							"", "AMMO", "AMMO_ROUNDS", "RARITY"]}
	
					,{ "type" : "section", "text" : "Mods list" }
	
					,{"type" : "switcher", "text": "Show Install Tag","help":"Add install tag (Shows installed, craftable and components/skill/perk missing status)", "id": "bModListAddInstallTag:StarUI Workbench"}
					,{"type" : "switcher", "text": "Show mod comparison columns","help":"Add columns to show the difference to the installed mod", "id": "bModListShowDiffColumns:StarUI Workbench"}
					
					,{ "type" : "section", "text" : "Active comparison columns for mods" }
	
					,{"type" : "switcher", "text": "Value", "id": "bDiffColValue:StarUI Workbench"}
					,{"type" : "switcher", "text": "Mass", "id": "bDiffColMass:StarUI Workbench"}
					,{"type" : "switcher", "text": "Physical damage", "id": "bDiffColDamagePhysical:StarUI Workbench"}
					,{"type" : "switcher", "text": "EM damage", "id": "bDiffColDamageEM:StarUI Workbench"}
					,{"type" : "switcher", "text": "Energy damage", "id": "bDiffColDamageEnergy:StarUI Workbench"}
					,{"type" : "switcher", "text": "Damage SUM", "id": "bDiffColDamageSum:StarUI Workbench"}
					,{"type" : "switcher", "text": "Damage per second", "id": "bDiffColDPS:StarUI Workbench"}
					,{"type" : "switcher", "text": "Ammo type", "id": "bDiffColAmmoType:StarUI Workbench"}
					,{"type" : "switcher", "text": "Ammo capacity", "id": "bDiffColAmmoCapacity:StarUI Workbench"}
					,{"type" : "switcher", "text": "Rate of Fire", "id": "bDiffColRateOfFire:StarUI Workbench"}
					,{"type" : "switcher", "text": "Range", "id": "bDiffColRange:StarUI Workbench"}
					,{"type" : "switcher", "text": "Accuracy", "id": "bDiffColAccuracy:StarUI Workbench"}
					,{"type" : "switcher", "text": "Thermal resistance", "id": "bDiffColResistThermal:StarUI Workbench"}
					,{"type" : "switcher", "text": "Airborne resistance", "id": "bDiffColResistAirborne:StarUI Workbench"}
					,{"type" : "switcher", "text": "Corrosive resistance", "id": "bDiffColResistCorrosive:StarUI Workbench"}
					,{"type" : "switcher", "text": "Radiation resistance", "id": "bDiffColResistRadiation:StarUI Workbench"}
				]
			},
			{
				"pageDisplayName" : "Food/Industrial/Drugs",
				"content" : [    { "type" : "section", "text" : "Food, industrial and drugs workbenches" }
					,{"type" : "slider", "text": "Max craftable amount", "help": "Max craftable amount (Vanilla: 99)", "id": "iMaxCraftableAmount:StarUI Workbench",
						"valueOptions" : {"min" : 10, "max" : 65530, "max_theoretically" : 65535, "step" : 10 }}
	
					
	
					,{"type" : "textinput", "text": "Columns for the industrial workbench", "id": "sIndustrialBenchInvListColumns:StarUI Workbench", "typeSpecial" : "columns",
							"availableColumns": ["COSTS_TEXT","COSTS_ICONS","MAX_CRAFTABLE", "PLAYER_INV_COUNT", "MASS", "VALUE"]}
					,{"type" : "textinput", "text": "Columns for the food workbench", "id": "sFoodBenchInvListColumns:StarUI Workbench", "typeSpecial" : "columns",
						"availableColumns": ["COSTS_TEXT","COSTS_ICONS","MAX_CRAFTABLE", "PLAYER_INV_COUNT", "MASS", "VALUE"]}
					,{"type" : "textinput", "text": "Columns for the drugs workbench", "id": "sDrugsBenchInvListColumns:StarUI Workbench", "typeSpecial" : "columns",
						"availableColumns": ["COSTS_TEXT","COSTS_ICONS","MAX_CRAFTABLE", "PLAYER_INV_COUNT", "MASS", "VALUE", "TYPE", "TREATMENT"]}
				]
			},
			{
				"pageDisplayName" : "Coloration",
				"content" : [
					{ "type" : "section", "text" : "Workbench colors" }
					,{"type" : "textinput", "text": "Weapon workbench", "help": "Weapon workbench color (default: 179, 85,  44)", "id": "sWeaponsBenchColor:StarUI Workbench", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Armor workbench", "help": "Armor workbench color (default: 149, 153, 123)", "id": "sArmorBenchColor:StarUI Workbench", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Industrial workbench", "help": "Industrial workbench color (default: 37,  164, 186)", "id": "sIndustrialBenchColor:StarUI Workbench", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Food workbench", "help": "Food workbench color (default: 64,  144, 86)", "id": "sFoodBenchColor:StarUI Workbench", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Drugs workbench", "help": "Drugs workbench color (default: 183, 183, 183)", "id": "sDrugsBenchColor:StarUI Workbench", "typeSpecial" : "color"}
					,{"type" : "textinput", "text":"Custom panel background", "help": "Use a custom background color for all panels in all workbenches (e.g. acts as default for sBackgroundColor for all interface parts in the layout config)", "id": "sPanelBackgroundColor:StarUI Workbench", "typeSpecial" : "color"}
					,{"type" : "slider", "text": "Dark mode", "help": "Enable the dark mode. You can adjust the strength in percent. Default: 0. Recommended value for dark mode: 50", "id": "iDarkMode:StarUI Workbench",
						"valueOptions" : {"min" : 0, "max" : 200, "step" : 1 }}
	
					,{ "type" : "section", "text" : "Rarity colors" }
					,{"type" : "textinput", "text": "Rare", "help": "Override rare color", "id": "sRarityColorRare:StarUI Workbench", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Epic", "help": "Override epic color", "id": "sRarityColorEpic:StarUI Workbench", "typeSpecial" : "color"}
					,{"type" : "textinput", "text": "Legendary", "help": "Override legendary color", "id": "sRarityColorLegendary:StarUI Workbench", "typeSpecial" : "color"}
		
				]
			},
			{
				"pageDisplayName" : "Column widths",
				"content" : [
	
					{ "type" : "section", "text" : "Column widths" }
					
					,{"type" : "slider", "text": "Default column width", "help": "Default column width for additional columns", "id": "iColWidthDefault:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "Default mod comparison column width", "help": "Default column width for mod comparison columns", "id": "iDiffColWidth:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
	
					,{ "type" : "section", "text" : "Special columns" }
					,{"type" : "slider", "text": "COSTS_TEXT", "id": "iColWidthCOSTS_TEXT:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 600, "step" : 5 }}
					,{"type" : "slider", "text": "COSTS_ICONS", "id": "iColWidthCOSTS_ICONS:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "MAX_CRAFTABLE", "id": "iColWidthMAX_CRAFTABLE:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "PLAYER_INV_COUNT", "id": "iColWidthPLAYER_INV_COUNT:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
	
					,{ "type" : "section", "text" : "Basic columns" }
					,{"type" : "slider", "text": "MASS", "id": "iColWidthMASS:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "MASS_STACK", "id": "iColWidthMASS_STACK:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "VALUE", "id": "iColWidthVALUE:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "VALUE_STACK", "id": "iColWidthVALUE_STACK:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "VPM", "id": "iColWidthVPM:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "TYPE", "id": "iColWidthTYPE:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					
					,{ "type" : "section", "text" : "Weapon columns" }
					,{"type" : "slider", "text": "AMMO", "id": "iColWidthAMMO:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "AMMO_ROUNDS", "id": "iColWidthAMMO_ROUNDS:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "RARITY", "id": "iColWidthRARITY:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WMANUFACTURER", "id": "iColWidthWMANUFACTURER:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WACC", "id": "iColWidthWACC:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WBASENAME", "id": "iColWidthWBASENAME:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WMAG", "id": "iColWidthWMAG:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WMODS", "id": "iColWidthWMODS:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WRANGE", "id": "iColWidthWRANGE:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WROF", "id": "iColWidthWROF:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "WTYPE", "id": "iColWidthWTYPE:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
	
					,{ "type" : "section", "text" : "Damage columns" }
					,{"type" : "slider", "text": "DAMAGES", "id": "iColWidthDAMAGES:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "PHYS", "id": "iColWidthPHYS:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "ENGY", "id": "iColWidthENGY:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "EM", "id": "iColWidthEM:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "DR", "id": "iColWidthDR:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "DMG", "id": "iColWidthDMG:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "DPS", "id": "iColWidthDPS:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
	
					,{ "type" : "section", "text" : "Resistance columns" }
					,{"type" : "slider", "text": "RESISTANCES", "id": "iColWidthRESISTANCES:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "ATHERMAL", "id": "iColWidthATHERMAL:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "AAIRBORNE", "id": "iColWidthAAIRBORNE:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "ACORROSIVE", "id": "iColWidthACORROSIVE:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
					,{"type" : "slider", "text": "ARADIATION", "id": "iColWidthARADIATION:StarUI Workbench", "valueOptions" : {"min" : 0, "max" : 300, "step" : 5 }}
	
				]
			},
			{
				"pageDisplayName" : "Workbench layouts",
				"content" : [
					{ "type" : "section", "text" : "Workbench layouts" }
					,{ "type" : "image", "images": [
						{"src" : "config.images/Workbench/Preset%20Vanilla.jpg", "maxWidth": "23%", "description": "Layout Vanilla"},
						{"src" : "config.images/Workbench/Preset Vanilla Extended.jpg", "maxWidth": "23%", "description": "Layout Vanilla Extended"},
						{"src" : "config.images/Workbench/Preset Hoarder.jpg", "maxWidth": "23%", "description": "Layout Hoarder"},
						{"src" : "config.images/Workbench/Preset Hoarder Alternate.jpg", "maxWidth": "23%", "description": "Layout Hoarder Alternate"}
					]}
	
					,{"type" : "dropdown", "text": "Weapon workbench", "id": "sWeapons:Layout",
						"valueOptions" : {"options" : ["Vanilla","Vanilla Extended","Hoarder","Hoarder Alternate"]} }
					,{"type" : "dropdown", "text": "Armor workbench", "id": "sArmor:Layout",
						"valueOptions" : {"options" : ["Vanilla","Vanilla Extended","Hoarder","Hoarder Alternate"]} }
					,{"type" : "dropdown", "text": "Industrial workbench", "id": "sIndustrial:Layout",
						"valueOptions" : {"options" : ["Vanilla","Vanilla Extended","Hoarder","Hoarder Alternate"]} }
					,{"type" : "dropdown", "text": "Food workbench", "id": "sFood:Layout",
						"valueOptions" : {"options" : ["Vanilla","Vanilla Extended","Hoarder","Hoarder Alternate"]} }
					,{"type" : "dropdown", "text": "Drugs workbench", "id": "sDrugs:Layout",
						"valueOptions" : {"options" : ["Vanilla","Vanilla Extended","Hoarder","Hoarder Alternate"]} }
				]
			}
	
		]
	},
	iniContentDefault: "[StarUI Workbench]\n; =======================================\n; Configuration file for StarUI Workbench\n; =======================================\n; \n; Allows you to configure StarUI Workbench\n;\n; Some general notes and tips: \n; \n; Position\n; --------\n; The position is specified based on a 1920x1080 layer. If you have another resolution, it will \n; automatically transformed into the position on your monitor.\n; \n; Color\n; -----\n; The colors are specified as \"red, green, blue(, alpha)\" where alpha is optional. \n; RGB values are from 0 to 255. Alpha is from 0 to 100 (percent).\n; \n; Examples: \n;   black is \"0, 0, 0\"\n;   white is \"255, 255, 255\"\n;   red is \"255, 0, 0\"\n;   blue is \"0, 0, 255\"\n; Color tip: Use any of the common RGB color picker on the net to find your values!\n;\n; Tips\n; ------------\n; * You can edit this file while the game is running. A simple quick-save/quick-load should \n;   load the new configuration! \n; * Copy this file and rename the copy to \"StarUI Workbench.ini\". Then change your settings in the \n;   new file. The new file won't be overwritten by mod updates!\n\n;=========\n; Generic\n;=========\n\n; This defines the main color for each workbench.\n; The color set here will be used for all interface parts of the workbench. \n; Note: You can specify separate colors for each interface part in the layout file. \n;       (Create new layout files for each workbench if you like to colorize the parts for each workbench types separately)\n\n; Weapon workbench color (default: 179, 85,  44)\nsWeaponsBenchColor    = 179, 85,  44\n; Armor workbench color (default: 149, 153, 123)\nsArmorBenchColor      = 149, 153, 123\n; Industrial workbench color (default: 37,  164, 186)\nsIndustrialBenchColor = 37,  164, 186\n; Food workbench color (default: 64,  144, 86)\nsFoodBenchColor       = 64,  144, 86\n; Drugs workbench color (default: 183, 183, 183)\nsDrugsBenchColor      = 183, 183, 183\n\n; Enable the dark mode. You can adjust the strength in percent. \n; Default: 0. Recommended value for dark mode: 50\niDarkMode = 0\n\n; Use a custom background color for all panels in all workbenches (e.g. acts as default for sBackgroundColor for all interface parts in the layout config)\n; Tip: Use an alpha value for transparent look\nsPanelBackgroundColor = \n\n; Instant open/close animation (Note: This won't disable the character animation)\nbInstantOpenCloseAnimation = 0\n\n; Instant open/close for confirmation popup (defaults to main instant open/close - remove \";\" to define a different setting)\n;bConfirmPopupInstantOpenCloseAnimation = 1\n\n; Fonts\n; Available fonts: \n; 0 Default (\"NB Architekt\")\n; 1 NB Architekt Light\n; 2 NB Architekt\n; 3 NB Grotesk R Semibold\n; 4 NB Grotesk R Bold\n; 5 Arial (Contains only ASCII characters for EN)\n; 6 Consolas (Contains only ASCII characters for EN)\niUseFont = 0\n\n;==============\n; Generic list\n;==============\n\n; List margin (outside)\niListMargin = 10\n\n; List entry height\niListEntryHeight = 31\n; List entry font size\niListEntryFontSize = 20\n; Left and right padding of list cells\niListEntryPadding = 8\n\n; Should the sub-lists be positioned a bit to the right-bottom? (disabled if your layout has specific positions for the sub-lists)\nbSubListsStackEffect = 0\n\n; Show tracking icon (for trackable items, e.g. craftables or in weapons/armor mod list)\nbShowTrackingIcon = 1\n\n; Max craftable amount (Vanilla: 99. Max allowed: 65535)\niMaxCraftableAmount = 999\n\n; Default column width for additional columns\niColWidthDefault = 80\n\n;========================================================\n; Craftables list (food, drugs and industrial workbench)\n;========================================================\n\n; Additonal list columns (limited columns, see below)\n; Available columns: COSTS_TEXT, COSTS_ICONS, MAX_CRAFTABLE, PLAYER_INV_COUNT, MASS, VALUE, TYPE (only drugs), TREATMENT (only drugs)\n; Columns for the industrial workbench\nsIndustrialBenchInvListColumns = COSTS_ICONS, MAX_CRAFTABLE, PLAYER_INV_COUNT, MASS, VALUE\n; Columns for the food workbench\nsFoodBenchInvListColumns = COSTS_ICONS, MAX_CRAFTABLE, PLAYER_INV_COUNT, MASS, VALUE\n; Columns for the drugs workbench\nsDrugsBenchInvListColumns = TYPE, COSTS_ICONS, MAX_CRAFTABLE, TREATMENT, PLAYER_INV_COUNT, MASS, VALUE\n\n; Column widths - define individual column widths for any column you like - define more in the schema iColWidth[COLNAME]... (e.g. for DMG iColWidthDMG)\niColWidthCOSTS_TEXT = 400\niColWidthCOSTS_ICONS = 220\niColWidthTYPE = 120\niColWidthMAX_CRAFTABLE = 60\niColWidthPLAYER_INV_COUNT = 60\niColWidthMASS = 60\n\n;=============================================\n; Inventory list (weapon and armor workbench)\n;=============================================\n\n; Show tag icon for item (in items list)\nbShowItemTagIcon = 1\n\n; Use the bench native item icons (instead of StarUI sorting tag icons)\nbUseVanillaItemIcons = 0\n\n; Use colored item icons (only for StarUI item sorting tags)\nbItemTagColorized = 1\n\n; Add a favorite item icon to weapons in quickslots\nbShowFavIcon = 1\n\n; Color weapon and armor by their rarity\nbShowRarityColors = 1\n\n; Rarity colors (Defaults: rare=115,204,223 epic=154,123,255 legendary=238,193,98)\nsRarityColorRare = 80, 136, 244\nsRarityColorEpic = \nsRarityColorLegendary = \n\n; Additonal inventory list columns (all inventory columns available - for a list available columns see the end of this file)\n; Columns for the weapon workbench\nsWeaponBenchInvListColumns = DAMAGES, DPS, MASS, VALUE, WMODS\n; Columns for the armor workbench\nsArmorBenchInvListColumns = PHYS, ENGY, EM, ATHERMAL, AAIRBORNE, ACORROSIVE, ARADIATION, MASS, VALUE\n\n; Column widths - define individual column widths for any column you like - define more in the schema iColWidth[COLNAME]... (e.g. for DMG iColWidthDMG)\niColWidthAMMO = 135\niColWidthRARITY = 110\niColWidthWMANUFACTURER = 200\niColWidthDAMAGES = 150\niColWidthPHYS = 50\niColWidthENGY = 50\niColWidthEM = 50\niColWidthRESISTANCES = 225\niColWidthATHERMAL = 50\niColWidthAAIRBORNE = 50\niColWidthACORROSIVE = 50\niColWidthARADIATION = 50\n\n\n;========================================\n; Mods list (weapon and armor workbench)\n;========================================\n\n; Add install tag (Shows installed, craftable and components/skill/perk missing status)\nbModListAddInstallTag = 1\n; Add columns to show the difference to the installed mod\nbModListShowDiffColumns = 1\n\n; Width of difference columns\niDiffColWidth = 80\n\n; Alloweded difference columns\nbDiffColValue = 1\nbDiffColMass = 1\n\nbDiffColDamagePhysical = 0\nbDiffColDamageEM = 0\nbDiffColDamageEnergy = 0\nbDiffColDamageSum = 1\nbDiffColDPS = 0\n\nbDiffColAmmoType = 1\nbDiffColAmmoCapacity = 1\nbDiffColRateOfFire = 1\nbDiffColRange = 1\nbDiffColAccuracy = 1\n\nbDiffColResistThermal = 1\nbDiffColResistAirborne = 1\nbDiffColResistCorrosive = 1\nbDiffColResistRadiation = 1\n\n; ==================\n;  Workbench layout\n; ==================\n; You can simply switch the layout for every workbench.\n; This mod comes with four presets, but you can define as many as you like!\n; The workbench layout file is located at Data\Interface\Workbench Layout\{Layout Name}.ini\n; Pre-defined layouts: \n;   Vanilla           - Just as you know it from the vanilla game.\n;   Vanilla Extended  - Just as you know it from the vanilla game, but slightly improved.\n;   Hoarder           - For the people which like lists more than 3D. A big list and a small item preview. Item card and 3D preview on the left and cost panel on the right. \n;   Hoarder Alternate - Like Hoarder layout, but with list on the left side and preview, item card and cost panel on the right.\n; Note: The Hoarder layouts aren't suitable for weapon and armor bench (the item card can clip and the mod description is placed below the list)\n[Layout]\nsWeapons    = Vanilla Extended\nsArmor      = Vanilla Extended\nsIndustrial = Hoarder\nsFood       = Hoarder\nsDrugs      = Hoarder\n\n; ========================\n;  Doc: Available columns \n; =======================\n; AMMO - Show used ammo type\n; AMMO_ROUNDS - Show available rounds for ammo type\n; DR - Damage resistance\n; DMG - Weapon damage\n; DPS - Weapon damage per second (Burst DPS, so without reload-time)\n; MASS - Weight\n; MASS_STACK - Weight per stack\n; RARITY - Shows the rarity of the item (rare, epic, legendary for weapon/apparel and common, uncommon, rare,... for other items)\n; VALUE - VALUE\n; VALUE_STACK - Value per stack\n; VPM - Value / Mass\n\n; Detail columns for weapon\n; WMANUFACTURER - Shows the manufacturer of the weapon\n; WACC - Weapon accuracy\n; WBASENAME - Shows the base name of the weapon (e.g. Eon, Grendel, Maelstrom,...)\n; WMAG - Weapon ammo capacity\n; WMODS - Weapon mod slots ( used / max )\n; WRANGE - Weapon range\n; WROF - Weapon rate of fire (gund) / Attack speed (melee)\n; WTYPE - Weapon Type\n\n; Detail columns for armor\n; RESISTANCES - Combined column for all three primary resistances\n; ATHERMAL - Armor thermal\n; ACORROSIVE - Armor corrosive\n; AAIRBORNE - Armor airborne\n; ARADIATION - Armor radiation\n\n; Detail columns for Damage\n; DAMAGES - Combined column for all three primary damage types\n; PHYS - Weapon physical damage / Armor physical resistance\n; ENGY - Weapon energy damage / Armor energy resistance\n; EM - Weapon EM damage / Armor EM resistance\n; ELEC - Weapon electrical damage / Armor electrical resistance [Currently unused in the game]\n"
};