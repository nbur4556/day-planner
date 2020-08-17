# Moment JS

### Installation

Can download from the [MomentJS](https://momentjs.com/) website.

##### Two Types of Installation

- Download and include JS file
    - Download the moment.min.js file from the [MomentJS](https://momentjs.com/) website.
    - Save inside your project structure
    - Link using a script tag
- Installation through node js
    - Installed through the terminal
    - "npm install moment"
    - Installs inside of the directory as a dependancy

### Creating Object

##### Creating an object with current date and time:

    let m = moment();

Creates a **local mode** moment object. Will display date and time in your devices current time zone

    let m = moment.utc();

Creates a **utc mode** moment object. Will display date and time in the standard UTC +00 timezone

The UTC timezone is recognized as the universal timezone

##### Creating an object with a specific date and time:

Can pass in a date string in ISO 8601 format

    let m = moment("2019-05-20");
    // Creates a moment object for May 19th, 2019

Can pass in a date and time string in ISO 8601 format

    let m = moment("2019-05-19T23:10:00.000);

The objects will still be created in **local mode** (your own time zone)

Can include a time zone offset in ISO 8601 format

    let m = moment("2019-05-19T23:10:00.000+05:00);

##### Creating an object using a format:

MomentJS uses a variety of formats that can be passed to the moment object

    let m = moment("14/06/2019 4:50PM", "DD/MM/YYYY h:mmA");

First argument is the string containing the date and time to pass to the moment object

Second argument is the format for the first string. Moment supports creating custom formats using symbols

Common symbols:

> YYYY    : 4 or 2 digit year
> YY      : 2 digit year
> Q       : Quarter of year, sets month to first month in quarter
> M or MM : Month number
> MMMM    : Month name in locale
> DD      : Day of month
> Do      : Day with ordinal (1st, 2nd, 3rd)
> DDDD    : Day of year
> X       : Unix timestamp
> x       : Unix milisecond timestamp
> HH      : Hours (24 hour time, 0 - 23)
> kk      : Hours (24 hour time, 0 - 24)
> hh      : Hours (12 hour time)
> mm      : Minutes
> ss      : Seconds
> A       : Post or ante meridiem (am or pm)
> Z       : offset from UTC (+-HH:mm)

##### Create using time since epoch:

Ephoce is defined as January 1st 1970

Using milliseconds:

    let m = moment(600000);
    // 10 minutes after epoch

Using seconds:

    let m = moment.unix(7200);
    // 2 hours after epoch

##### Converting object type

    m.utc();

Converts the moment object from a **local mode** object to a **utc mode** object

    m.local();

Converts the moment object from a **utc mode** object to a **local mode** object

### Getting and Setting Units

##### Getting Units

Getter methods include:

    m.year()
    m.quarter();
    m.month()
    m.week();
    m.date();
    m.day();
    m.hour();
    m.minutes();
    m.millisecond();
    m.utcOffset();

Can also use a generall get method, and pass the string of the unit you want to get:

    m.get("quarter");
    m.get("hour");

Both methods return integers

##### Setting Units

Setter methode include:

    m.year(INT)
    m.quarter(INT);
    m.month(INT)
    m.week(INT);
    m.date(INT);
    m.day(INT);
    m.hour(INT);
    m.minutes(INT);
    m.millisecond(INT);
    m.utcOffset(INT);

Can change the value of INT to an integer to set the specific value of the moment object.

Can also use a generall set method, and pass the string of the unit you want to set:

    m.set("day", 4);
    //Sets day of week to 4 "Thursday"

##### Day vs Date

**_Day_** is the day of the week
- 0 - 6 represents Sunday through Saturday
- Values loop (so 7 is Monday, 8 is Tuesday, etc.)

**_Date_** is the date of the month

### Max and Min

Can compare maximum and minimum between two different moment objects

##### .max

Returns the maximum object of two moment objects

Later dates are considered higher

    moment.max(m, differentM);
    //returns the object with latest date

##### .min

Return the minimum object of two moment objects

Earlier dates are considered lower

    moment.min(m, differentM);
    //returns the object with the earliest date

### Manipulating Moment Objects

##### .add and .subtract

Can use the add method to add an amount of time to the moment object

Can use the subtract method to subtract an amount of time to the moment object

Add method takes two arguments: an integer for the amount, and a string for the unit to manipulate

    //Examples:
    m.add(3, "days");
    m.add(4, "hours");

Subtract method takes two arguments: an integer for the amount, and a string for the unit to manipulate

    //Examples:
    m.subtract(3, "days");
    m.subtract(4, "hours");

Add and Subtract methods can be chained together

    //Examples:
    m.add(5, "hours").add(15, "minutes");
    m.subtract(5, "hours").subtract(15, "minutes");

##### .startOf and .endOf

StartOf method sets the moment object to the start of a specific unit of time

    m.startOf("year");
    //returns January 1st of the current year
    m.startOf("hour")l
    //returns the 0 minutes and 0 seconds for the current hour

EndOf method returns the end of a specific unit of time

    m.endOf("day");
    //Returns 23:59:59 of the current day

### Display and Format Date and Time

##### Writing date and time as string:

    m.toString();

Returns current date and time of the devices current time zone

*Format:* day month dd yyyy hh:mm:ss Timezone
*Example:* "Mon May 20 2019 21:06:26 GMT+1000"

    m.toISOString();

Returns current date and time from UTC timezone in the ISO 8601 format

This format is an internationally recongized date and time format

*Format:* yyyy-mm-ddThh:mm:ss.tttZ
*Example:* "2019-05-20T11:06:26.150Z"

##### Format using symbols

Can format displayed date and time using the same symbols from the getters and setters

    m.format("dddd");
    //Displays day of the week

These can be combined

    m.format("dddd MMM Mo YYYY")
    //Displays the format Day of week, Month, day of Month, year
    //Example: Wednesday May 5th 2019

Escaping Characters is supported in square brackets

    m.format("[The day is] dddd [and the year is] YYYY");
    //Example: The day is Wednesday and the year is 2019

##### Locale aware formatting

*Requires the MomentJS version with locale*

Formats based on the set locale of the moment object

Locale is set to English US by default

    m.format("L");
    //Example: 08/17/2020

Can change the locale

    m.locale("en-au");
    m.format("L");
    //Example: 17/08/2020

##### .fromNow and .from

.fromNow method returns readable text that says how far the moment objects time is from the current time

    let m = moment("2020-08-10");
    m.fromNow()
    //Example: 7 days ago

.from method returns readable text from a specific date

    let m = moment("2020-08-10");
    m.from("2019-08-10");
    //Example: 1 year ago
