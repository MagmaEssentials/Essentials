/*
 * EssentialsCore
 * V0.0.1
 * Made by The Magma Essentials Team
 *
 */
 
 function ess_tpToPlayer(Player, targetPlayer) {
	Player.TeleportTo(targetPlayer);
}
function ess_showMOTD(Player) {
	Player.Message("Welcome, " + Player.Name);
	Player.Message("This server is running Essentials V0.0.1");
	ess_showOnline(Player);
}
function ess_showOnline(Player) {
	var onlinePlayers = "";
	for (player in Server.Players) {
		if (player != Server.Players[Server.Players.Length - 1]) {
			onlinePlayers += player.Name + ", ";
		} else if (player == Server.Players[Server.Players.Length - 1]) {
			onlinePlayers += player.Name;
		}
	var numOfOnlinePlayers = Server.Players.Length;
	Player.Message("There are " + numOfOnlinePlayers + " players online:");
	Player.Message(onlinePlayers);
}
function ess_kickPlayer(targetPlayer) {
	targetPlayer.Disconnect();
}
function ess_killPlayer(targetPlayer) {
	targetPlayer.Kill();
}

function ess_messagePlayer(sender, msg) {
    try {
        var targetPlayer = Magma.Player.FindByName(args[0]);
        var msg = esMsgArgsToText(args);
        targetPlayer.Message("[color #F8D03B][[color #E11A1A] " + sender.Name + "[color #FFFFFF] -> [color #F9D03B]You][color #FFFFFF]: " + msg);
    } catch (err) {
        if (targetPlayer == undefined) {
            sender.Message("Could not find player");
        }
        if (msg == undefined) {
            sender.Message("Valid Syntax: /msg (Player) (Message)");
        } else {
            sender.Message("Valid Syntax: /msg (Player) (Message)");
        }
    }
}

function ess_messagePlayerByArgs(sender, args) {
    try {
        var targetPlayer = Magma.Player.FindByName(args[0]);
        var msg = ess_msgArgsToText(args);
        targetPlayer.Message("[color #F8D03B][[/color][color #E11A1A] " + sender.Name + "[/color][color #FFFFFF] ->[/color] [color #F9D03B]You][/color][color #FFFFFF]:[/color] " + msg);
    } catch (err) {
        if (targetPlayer == undefined) {
            sender.Message("Could not find player");
        }
        if (msg == undefined) {
            sender.Message("Valid Syntax: /msg (Player) (Message)");
        } else {
            sender.Message("Valid Syntax: /msg (Player) (Message)");
        }
    }
}

/*DO NOT USE messagePlayerByName FOR THE MOMENT*/
function ess_messagePlayerByName(sender, targetPlayerName, msg) {
    try {
        var targetPlayer = Magma.Player.FindByName(targetPlayerName);
        var msg = esMsgArgsToText(args);
        targetPlayer.Message("[" + sender.Name + " -> You]: " + msg);
    } catch (err) {
        if (targetPlayer == undefined) {
            sender.Message("Could not find player");
        }
        if (msg == undefined) {
            sender.Message("Valid Syntax: /msg (Player) (Message)");
        } else {
            sender.Message("Valid Syntax: /msg (Player) (Message)");
        }
    }
}
function ess_argsToText(args) {
    var text = "";
    if (args.Length == 1) {
        text = args[0];
    } else {
        for (var l = 0; l < args.Length; l++) {
            if (l == args.Length - 1) {
                text += args[l];
            } else {
                text += args[l] + " ";
            }
        }
    }
    return text;
}
function ess_msgArgsToText(args) {
    var text = "";
    if (args.Length == 1) {
    } else {
        for (var l = 1; l < args.Length; l++) {
            if (l == args.Length - 1) {
                text += args[l];
            } else {
                text += args[l] + " ";
            }
        }
    }
    return text;
	
