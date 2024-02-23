const MenuForDay = (day) => {
    switch (day.toLowerCase()) {

        case 'monday':
            console.log("Monday's Menu: Paneer Butter Masala and Butter Nan");
            break;

        case 'tuesday':
            console.log("Tuesday's Menu: Chicken Tikka");
            break;

        case 'wednesday':
            console.log("Wednesday's Menu: Grilled Chicken Tandoori");
            break;

        case 'thursday':
            console.log("Thursday's Menu: Vegetable Crispy Fry");
            break;

        case 'friday':
            console.log("Friday's Menu: Fish and Chicken");
            break;

        case 'saturday':
            console.log("Saturday's Menu: BBQ Sandwich");
            break;

        case 'sunday':
            console.log("Sunday's Menu: Roast Egg");
            break;
            
        default:
            console.log("Invalid day input.");
    }
};

MenuForDay('monday');
MenuForDay('friday');
MenuForDay('sunday');
