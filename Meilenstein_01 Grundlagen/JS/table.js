$(document).ready(function () {


    $("#addWaffe").click(function () {

        // Werte aus DOM holen
        var icon = $("#inputIcon").val();
        var name = $("#inputName").val();
        var attackPower = $("#inputAttackPower").val();
        var weight = $("#inputWeight").val();
        var cost = $("#inputCost").val();
        var tier = $("#inputTier").val();

        // Grobe Validierung
        if (name.length === 0 || attackPower.length === 0 || weight.length === 0 || cost.length === 0 || tier.length === 0) {
            window.alert("Bitte alles ausfüllen!");
        } else {

            // Markup zusammensbasteln
            finalWeapon = "<tr><td>" + icon + "</t><td>" + name + "</t><td>" + attackPower + "</td><td>" + weight + "</td><td>" + cost + "</td><td>" + tier + "</td></tr>";
            tableBody = $("#tableWeapons tbody");
            tableBody.append(finalWeapon);

            window.alert("Waffe wurde hinzugefügt")

            // Input Felder saeubern
            $('#inputIcon').val('');
            $('#inputName').val('');
            $('#inputAttackPower').val('');
            $('#inputWeight').val('');
            $('#inputCost').val('');
            $('#inputTier').val('');
        }
    });
});