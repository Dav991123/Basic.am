const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mailer = require("express-mailer");
const config = require("config");
const EmailUtils = require("./utils/email");

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mailer.extend(app, {
    from: 'basic@it-center.am',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
        user: "basic@it-center.am",
        pass: "Basic659988@"
    }
});

app.set('views', "./views");
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    replaceData({
        protocol: request.protocol,
        host: request.get("host"),
        orgUrl: request.originalUrl,
        title: 'Basic IT Center',
        imageUrl: 'https://www.basic.am/client/public/social/main.png',
        description: 'Basic IT Center-ը հանդիսանում է ՏՏ ամենաառաջադեմ կրթահամալիրը Հայաստանում՝ առաջարկելով ծրագրավորման ամենապահանջված միջավայրերի մասնագիտացված դասընթացներ։',
    })
        .then(result => response.send(result))
        .catch(err => response.send(err));
});

app.get('/contacts', function(request, response) {
    replaceData({
        protocol: request.protocol,
        host: request.get("host"),
        orgUrl: request.originalUrl,
        title: 'Հետադարձ կապ | Basic IT Center',
        imageUrl: 'https://www.basic.am/client/public/social/contacts.png',
        description: 'Basic IT Center-ը հանդիսանում է ՏՏ ամենաառաջադեմ կրթահամալիրը Հայաստանում՝ առաջարկելով ծրագրավորման ամենապահանջված միջավայրերի մասնագիտացված դասընթացներ։',
    })
        .then(result => response.send(result))
        .catch(err => response.send(err));
});

app.get('/about', function(request, response) {
    replaceData({
        protocol: request.protocol,
        host: request.get("host"),
        orgUrl: request.originalUrl,
        title: 'Մեր մասին | Basic IT Center',
        imageUrl: 'https://www.basic.am/client/public/social/main.png',
        description: 'Basic IT Center-ը հանդիսանում է ՏՏ ամենաառաջադեմ կրթահամալիրը Հայաստանում՝ առաջարկելով ծրագրավորման ամենապահանջված միջավայրերի մասնագիտացված դասընթացներ։',
    })
        .then(result => response.send(result))
        .catch(err => response.send(err));
});

app.get('/courses', function(request, response) {
    replaceData({
        protocol: request.protocol,
        host: request.get("host"),
        orgUrl: request.originalUrl,
        title: 'Դասընթացներ | Basic IT Center',
        imageUrl: 'https://www.basic.am/client/public/social/courses.png',
        description: 'Basic IT Center-ը հանդիսանում է ՏՏ ամենաառաջադեմ կրթահամալիրը Հայաստանում՝ առաջարկելով ծրագրավորման ամենապահանջված միջավայրերի մասնագիտացված դասընթացներ։',
    })
        .then(result => response.send(result))
        .catch(err => response.send(err));
});

app.get('/courses/android', function(request, response) {
    replaceData({
        protocol: request.protocol,
        host: request.get("host"),
        orgUrl: request.originalUrl,
        title: 'Android ծրագրավորման դասընթաց | Basic IT Center',
        imageUrl: 'https://www.basic.am/client/public/social/android.png',
        description: 'Android օպերացիոն համակարգով են աշխատում միլիոնավոր բջջային սարքեր աշխարհի ավելի քան 190 երկրներում։ Օրեցօր ավելանում է տվյալ ՕՀ-ի օգտատերերի թիվը՝ շնորհիվ իր արագագործության և նորարարական գաղափարների։',
    })
        .then(result => response.send(result))
        .catch(err => response.send(err));
});

app.get('/courses/web/back-end', function(request, response) {
    replaceData({
        protocol: request.protocol,
        host: request.get("host"),
        orgUrl: request.originalUrl,
        title: 'Back-End ծրագրավորման դասընթաց | Basic IT Center',
        imageUrl: 'https://www.basic.am/client/public/social/back-end.png',
        description: 'Back-End-ը ապահովում է կայքի անխափան աշխատանքը։ Իհարկե տվյալ մասը օգտատիրոջը տեսանելի չէ, քանի որ այն կապված է տվյալների բազայի և սերվերների հետ։ Back-End ծրագրավորողները ստեղծում են դինամիկ կայքեր, որոնք մշտապես փոփոխվում և թարմացվում են իրական ժամանակում։ Կոդը, որը գրում են վեբ ծրագրավորողները, հաղորդակցվում է սերվերի հետ, հետո՝ հուշում է բրաուզերին, թե ինչ օգտագործել տվյալների բազայից։',
    })
        .then(result => response.send(result))
        .catch(err => response.send(err));
});

app.get('/courses/cplusplus', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'C++ ծրագրավորման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/cplusplus.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'C++ -ը հայտնի է որպես հզոր ծրագրավորման լեզու, որի օգնությամբ հնարավոր է կառավարել համակարգչային ռեսուրսները և ավելի հեշտությամբ հաղթահարել հաջորդ ծրագրավորման լեզու սովորելու դժվարությունները։ C++ -ը հաճախ օգտագործվում է ստեղծելու և զարգացնելու խաղեր, ինչպես նաև desktop հավելվածներ։ Բազմաթիվ AAA խորագրով վիդեոխաղեր ստեղծվել են C++-ի օգնությամբ։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/cplusplus');
        response.send(result);
    });
});

app.get('/courses/csharp', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'C# ծրագրավորման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/csharp.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Windows ՕՀ-ի համար հավելվածներ ստեղծելու անփոխարինելի ծրագրավորման լեզու, չնայած նրան, որ այն հայտնի է իր բազմահարթակ կիրառելիությամբ և օժտված է հնարավորությամբ` ստեղծելու ծրագրային ապահովումներ Mac և Linux ՕՀ-ների համար, իսկ .NET-ը լայն տարածում ունի վեբ կայքերի մշակման գործընթացում։ C#-ի օգնությամբ կարող եք ստեղծել XML Web ծառայություններ, հաջախորդների համար նախատեսված ծառայություններ, տվյալների բազաների հավելվածներ և շատ ավելին։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/csharp');
        response.send(result);
    });
});
app.get('/courses/web/front-end', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'Front-End ծրագրավորման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/front-end.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Front-End ծրագրավորողը ապահովում է կայքէջի արտաքին տեսքը, որի մշակման գործընթացում օգտագործվում է HTML և CSS, իսկ JavaScript-ը, որը ներկայումս համարվում է ամենապահանջված ծրագրավորման միջավայրը աշխարհում, ապահովում է կոնտենտի ֆունկցիոնալությունը և  դինամիկությունը ապահովելու համար և ոչ միայն։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/web/front-end');
        response.send(result);
    });
});
app.get('/courses/ios', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'iOS ծրագրավորման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/ios.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'iOS օպերացիոն համակարգը ստեղծվել է "Apple Inc."-ի կողմից՝ նախատեսված իր սեփական արտադրանքների համար։ Տվյալ համակարգով են աշխատում iPhone-ը, iPad-ը և iPod Touch-ը։ Այն հայտնի է բարձր կատարողականությամբ և կայունությամբ։ iOS-ը հզոր, ապահով և վստահված օպերացիոն համակարգ է։ Իր արագագործության և որակի շնորհիվ այն ունի ավելի քան 700 միլիոն օգտատեր ամբողջ աշխարհում։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/ios');
        response.send(result);
    });
});
app.get('/courses/java', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'Java ծրագրավորման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/java.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Java ծրագրավորման լեզուն առանձնանում է իր ապահովությամբ, հուսալիությամբ, կիրառվում է տարբեր հարթակներում, ինչպես նաև համարվում է ամենաբարձր վարձատրվող մասնագիտությունը ծրագրավորման ոլորտում։ Հիմնականում կիրառվում է վեբ կայքերի, խաղերի և Android ՕՀ-ի համար հավելվածների ստեղծման ընթացքում։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/java');
        response.send(result);
    });
});
app.get('/courses/ml', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'Մեքենայական ուսուցման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/ml.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Թվային տեխնոլոգիաների այս դարաշրջանում արհեստական բանականությունը օրեցոր զարգանում և կիրառվում է այնպիսի գերհզոր ՏՏ ընկերություններում, ինչպիսիք են՝ «Apple»-ը, «Google»-ը, «Microsoft»-ը, «Intel»-ը և մի շարք այլ աշխարհահռչակ կազմակերպություններ։ ՏՏ ոլորտում՝ մեքենայական ուսուցման շնորհիվ, ցանկացած անհնարին թվացող գաղափար կամ նախագիծ հնարավոր է իրականություն դարձնել։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/ml');
        response.send(result);
    });
});
app.get('/courses/programming-basics', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'Ծրագրավորման հիմունքներ | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/programming-basics.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Դասընթացը իր մեջ ներառում է ծրագրավորման միջավայրերի ընդհանուր գաղափարը և ընձեռում է հնարավորություն հետագայում կողմնորոշվելու ծրագրավորման լեզվի ընտրության հարցում։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/programming-basics');
        response.send(result);
    });
});
app.get('/courses/project-management', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'Նախագծի կառավարման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/pm.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Նախագծի կառավարումը կարևոր նշանակություն ունի աշխատանքային պրոցեսի ճիշտ կազմակերպման գործում, ուստի օրեցօր ավելանում է նախագծի կառավարման դերն ու նշանակությունը աշխատաշուկայում։ Ժամանակակից կազմակերպությունները աստիճանաբար ներդնում են նաև Agile սկզբունքը, որը լայնորեն տարածված է գրեթե բոլոր ոլորտներում:');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/project-management');
        response.send(result);
    });
});
app.get('/courses/python', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'Python ծրագրավորման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/python.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Python-ը կայուն և բավականին տարածված լեզու է։ Այն միանգամայն ակտուալ է Back-End ծրագրավորման, տվյալների վերլուծության, արհեստական բանականության, ինչպես նաև համակարգչային գիտության միջավայրերում։ Python-ը նաև օգտագործվում է ապագայում ստեղծվելիք ծրագրերի համար նախատիպեր ստեղծելու համար։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/python');
        response.send(result);
    });
});
app.get('/courses/qa', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'QA / Որակի ապահովման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/qa.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Որակի ապահովման գործընթացի շնորհիվ ընկերությունները բարելավում են իրենց ծառայությունների կամ ապրանքի որակային մակարդակը։ Այն օգնում է բարձրացնելու վստահությունը տվյալ կազմակերպության նկատմամբ, ինչպես նաև ապահովելու աշխատանքի արդյունավետ և սահուն ընթացքը։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/qa');
        response.send(result);
    });
});
app.get('/courses/web/react', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'React JS ծրագրավորման դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/react.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Սովորի՜ր մեկ անգամ և կիրառիր ամենուր։ Ահա սա է React-ի նշանաբանը։ Facebook-ի կողմից ստեղծված գրադարանի միջոցով հնարավոր է ստեղծել գերարագ վեբ կայքեր, որը թույլ կտա նույնիսկ մի փոքր փոփոխության պարագայում անմիջապես թարմացնել կայքը՝ առանց որևէ դժվարության և ժամանակ կորցնելու։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/web/react');
        response.send(result);
    });
});
app.get('/courses/seo', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'SEO դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/seo.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'SEO-ն (որոնողական համակարգերի օպտիմալացումը) ուղղված է բարձրացնելու կայքի տեսանելիությունը որոնողական համակարգերում՝ ստեղծելով ճիշտ կառուցվածք և բովանդակություն: Այն հանդիսանում է հզոր մարքեթինգային գործիք այցելություններն ավելացնելու համար և իր արդյունավետության շնորհիվ հանդիսանում է կայքի առաջխացման անբաժանելի մասը։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/seo');
        response.send(result);
    });
});
app.get('/courses/ui-ux', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'UI/UX դիզայնի դասընթաց | Basic IT Center');
        data = data.replace(/\$OG_IMAGE/g, 'https://www.basic.am/client/public/social/ui-ux.png');
        data = data.replace(/\$OG_DESCRIPTION/g, 'Դիզայնի կիրառման հարթակները բազմազան են՝ սկսած արդյունաբերությունից, մինչև տեխնոլոգիական ոլորտ։ UI/UX-ի շնորհիվ կարողանում ենք իրականություն դարձնել կայքի արտաքին տեսքի հետ առնչվող մեր անհավանական գաղափարները՝ ավելի դյուրին դարձնելով կայքի օգտագործման ընթացքը, ինչպես նաև ապահովելով երկխոսություն` ծրագրավորողի և դիզայների միջև։');
        let result = data.replace(/\$OG_URL/g, 'https://www.basic.am/courses/ui-ux');
        response.send(result);
    });
});

app.use(express.static(path.resolve(__dirname, './client/build')));

// app.get('*', function(request, response) {
//     replaceData({
//         protocol: request.protocol,
//         host: request.get("host"),
//         orgUrl: request.originalUrl,
//         title: 'Basic IT Center',
//         imageUrl: 'https://www.basic.am/client/public/social/main.png',
//         description: 'Basic IT Center-ը հանդիսանում է ՏՏ ամենաառաջադեմ կրթահամալիրը Հայաստանում՝ առաջարկելով ծրագրավորման ամենապահանջված միջավայրերի մասնագիտացված դասընթացներ։',
//     })
//         .then(result => response.send(result))
//         .catch(err => response.send(err));
// });

function replaceData(arg){
    return new Promise((resolve, reject) => {

        arg = {
            protocol: arg.protocol || "https",
            host: arg.host || "basic.am",
            orgUrl: arg.orgUrl || "",
            title: arg.title,
            imageUrl: arg.imageUrl || "",
            description: arg.description || "No description",
            url: arg.url || ""
        };

        const filePath = path.resolve(__dirname, "./client/build", "index.html");

        const url = arg.protocol + '://' + arg.host + arg.orgUrl;

        fs.readFile(filePath, "utf8", function (err, data) {
            if(err) {
                reject(err);
                return console.log(err);
            }

            data = data.replace(/\$OG_TITLE/g, arg.title);
            data = data.replace(/\$OG_IMAGE/g, arg.imageUrl);
            data = data.replace(/\$OG_DESCRIPTION/g, arg.description);
            data = data.replace(/\$OG_URL/g, url);
            resolve(data);
        });
    });
}

app.post("/contacts", async (req, res, next) => {
    EmailUtils.sendEmail('contact', "basic@it-center.am", 'Հետադարձ կապ', {
        name: req.body.name,
        phone: req.body.phone,
        message: req.body.message,
        email: req.body.email
    }, async (error) => {
        if(error){
            let err = new Error("Could not send email. Please try again later.");
            // const err = new Error(error.message);
            err.statusCode = 500;
            return next(err);
        }

        res.redirect("/contacts");
        // res.status(200).send("Mail sent successfully.");
    });
});

app.get('*', function(request, response) {
    request.originalUrl = "";
    const filePath = path.resolve(__dirname, './client/build', 'index.html');
    response.sendFile(filePath);
});

app.get("/", async (err, req, res, next) => {
    res.send("Error occured: ", err);
});

app.listen(port);

module.exports = app;