document.addEventListener("DOMContentLoaded", function () {
    let storyText = document.getElementById("storyText");
    let castleBtn = document.getElementById("castleBtn");
    let caveBtn = document.getElementById("caveBtn");
    
    let stats = {
        strength: 5,
        intelligence: 5,
        charisma: 5,
        health: 100,
    };

    function updateStatsDisplay() {
        document.getElementById("stat-strength").textContent = stats.strength;
        document.getElementById("stat-intelligence").textContent = stats.intelligence;
        document.getElementById("stat-charisma").textContent = stats.charisma;
        document.getElementById("stat-health").textContent = stats.health;
    }

    function gainStrength(amount = 1) {
        stats.strength += amount;
        updateStatsDisplay();
    }

    function gainIntelligence(amount = 1) {
        stats.intelligence += amount;
        updateStatsDisplay();
    }

    function gainCharisma(amount = 1) {
        stats.charisma += amount;
        updateStatsDisplay();
    }

    function takeDamage(amount) {
        stats.health -= amount;
        if (stats.health < 0) stats.health = 0;
        updateStatsDisplay();
    }

    document.addEventListener("DOMContentLoaded", updateStatsDisplay);

    castleBtn.addEventListener("click", () => {
        storyText.innerHTML = "Ти опинився перед величним замком, навколо якого витає таємнича аура. Що ти робитимеш?";
        setChoices("castle");
    });

    caveBtn.addEventListener("click", () => {
        storyText.innerHTML = "Вхід до темної печери манить тебе, шепочучи древні таємниці. Куди підеш далі?";
        setChoices("cave");
    });

    function setChoices(path) {
        let choicesDiv = document.querySelector(".choices");
        choicesDiv.innerHTML = "";

        let choicesMap = {
            
            castle: [
                {
                    text: "Підійти до лицаря, що стоїть при вході",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Лицар, вбраний в сяючу броню, піднімає голову і дивиться на тебе прискіпливо.</p>
                             <p><i>"Що ти шукаєш в цих стінах, мандрівцю? Чи готовий ти зіткнутись з випробуваннями королівства?"</i></p>`;
                        setChoices("castleKnight");
                    },
                },
                {
                    text: "Оглянути укріплення замку і пошукати схованку",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Пішовши по мурах, ти знайшов обірваний старий плащ, схований за камінням.</p>` +
                            `<p>Переодягнувшись, можеш спробувати непомітно проникнути всередину.</p>`;
                        setChoices("castleSneakIn");
                    },
                },
                {
                    text: "Відразу зайти в головні ворота та викликати на себе увагу",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Великі ворота скриплять, коли ти проходиш, і охоронці моментально на тебе реагують.</p>` +
                            `<p>Один з них, суворий чоловік із шрамом на щоках, грізно крикнув: "Стоп! Зачем ти проник сюди?"</p>`;
                        setChoices("castleGuardConfront");
                    },
                },
            ],

            castleKnight: [
                {
                    text: "Сказати, що шукаєш пригод і готовий до бою",
                    action: () => {
                        storyText.innerHTML =
                            `<p><i>"Тоді ти гідний пройти випробування,"</i> — промовляє лицар. ` +
                            `Він запрошує тебе на тренувальний двір, де навчають майстерності боя.</p>`;
                        gainCharisma(1);
                        setChoices("castleTraining");
                    },
                },
                {
                    text: "Попросити лицаря допомогти з інформацією про артефакт",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Лицар задумливо дивиться і каже:</p>` +
                            `<p><i>"Артефакт — це сила, яка здатна зробити тебе володарем, але не кожен витримає її тягар."</i></p>` +
                            `<p>Він пропонує тобі прислухатись до мудрості старої відьми в лісі.</p>`;
                        gainIntelligence(1);
                        setChoices("castleWitchAdvice");
                    },
                },
                {
                    text: "Загрожувати лицарю і вимагати пропустити",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Лицар засміявся і сказав:</p>` +
                            `<p><i>"Така поведінка скаже лише про твою слабкість. Вирішимо це по-іншому."</i></p>` +
                            `<p>Він викликає тебе на дуель!</p>`;
                        setChoices("duelKnight");
                    },
                },
            ],

            castleTraining: [
                {
                    text: "Тренуватися важко і наполегливо",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Твої зусилля приносять плоди — ти стаєш сильнішим і витривалішим.</p>`;
                        gainStrength(2);
                        setChoices("postTraining");
                    },
                },
                {
                    text: "Поспілкуватися з іншими лицарями і здобути друзів",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти заводиш нові знайомства, що можуть стати у пригоді в майбутньому.</p>`;
                        gainCharisma(2);
                        setChoices("postTraining");
                    },
                },
                {
                    text: "Ігнорувати тренування і дослідити замок",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти знаходиш секретний прохід до бібліотеки зі стародавніми манускриптами.</p>`;
                        setChoices("castleLibrary");
                    },
                },
            ],

            postTraining: [
                {
                    text: "Попросити лицаря показати дорогу до схованки артефакту",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Лицар киває і веде тебе таємними шляхами замку.</p>`;
                        setChoices("castleSecretPath");
                    },
                },
                {
                    text: "Вирушити самостійно шукати артефакт",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти залишаєш двір, сповнений нової впевненості і сил.</p>`;
                        setChoices("castleExploreAlone");
                    },
                },
            ],

            castleWitchAdvice: [
                {
                    text: "Відправитись у ліс на пошуки відьми",
                    action: () => {
                        storyText.innerHTML =
                            `<p>В лісі ти знаходиш маленьку хатинку посеред густого лісу.</p>` +
                            `<p>Відьма виходить з тіней і дивиться на тебе пильними очима.</p>` +
                            `<p><i>"Ти шукаєш силу, але чи готовий заплатити її ціну?"</i></p>`;
                        setChoices("witchTest");
                    },
                },
                {
                    text: "Ігнорувати рад і залишитися в замку",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти вирішуєш не ризикувати і залишатися серед знайомих стін.</p>`;
                        setChoices("castleStay");
                    },
                },
            ],

            witchTest: [
                {
                    text: "Відповісти, що готовий на все за силу",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Відьма усміхається і дає тобі три завдання, щоб довести свою гідність.</p>` +
                            `<p>Перше завдання - знайти квітку, що світиться, у болотах.</p>`;
                        setChoices("witchTask1");
                    },
                },
                {
                    text: "Сказати, що шукаєш більше знань, а не силу",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Відьма схвалює твою мудрість і ділиться таємницями магії сіяння зірок.</p>`;
                        gainIntelligence(3);
                        setChoices("witchKnowledge");
                    },
                },
                {
                    text: "Відмовитись від пропозиції і піти",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти відходиш від хатинки, відчуваючи невпевненість.</p>`;
                        setChoices("castleStay");
                    },
                },
            ],

            witchTask1: [
                {
                    text: "Вирушити на болота",
                    action: () => {
                        storyText.innerHTML =
                            `<p>На болотах ти зустрічаєш болотного духа, який охороняє квіти. Він пропонує угоду.</p>` +
                            `<p><i>"Пройди мої випробування — і квітка твоя. Провалиш — залишишся тут навіки."</i></p>`;
                        setChoices("swampTrial");
                    },
                },
                {
                    text: "Попросити відьму пояснити випробування детальніше",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Вона розповідає про три випробування: мужність, мудрість і чесність.</p>`;
                        gainIntelligence(1);
                        setChoices("witchTask1Decision");
                    },
                },
            ],

            swampTrial: [
                {
                    text: "Прийняти випробування — мужність",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти зіштовхуєшся із болотом, яке оживає. Відчуваєш, що потрібна сила.</p>`;
                        if (stats.strength >= 7) {
                            storyText.innerHTML += `<p>Твоя сила допомогла подолати небезпеку. Ти отримуєш квітку.</p>`;
                            gainCharisma(1);
                            setChoices("witchTask2");
                        } else {
                            storyText.innerHTML += `<p>Ти занадто слабкий, щоб перемогти. Тебе затягує болото...</p>`;
                            takeDamage(40);
                            if (stats.health <= 0) {
                                storyText.innerHTML += `<p>Ти загинув у болоті.</p>`;
                                endStory();
                            } else {
                                setChoices("swampRetry");
                            }
                        }
                    },
                },
            ],

            swampRetry: [
                {
                    text: "Спробувати ще раз, збираючи сили",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти відпочив і готовий боротись далі.</p>`;
                        gainStrength(2);
                        setChoices("swampTrial");
                    },
                },
                {
                    text: "Відмовитись від випробування",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти залишаєш болото і повертаєшся до відьми.</p>`;
                        setChoices("witchTask1Decision");
                    },
                },
            ],

            witchTask2: [
                {
                    text: "Готовий до випробування мудрості",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Відьма ставить тобі загадку: <i>"Що не має ні початку, ні кінця, і водночас не може існувати без світла?"</i></p>`;
                        setChoices("riddleAnswer");
                    },
                },
            ],

            riddleAnswer: [
                {
                    text: "Відповісти: 'Це коло часу.'",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Правильно! Ти показав мудрість. Залишилось останнє випробування — чесність.</p>`;
                        gainIntelligence(2);
                        setChoices("witchTask3");
                    },
                },
                {
                    text: "Відповісти: 'Світло.'",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ні, це не вірно. Відьма сумує, але дає ще один шанс.</p>`;
                        setChoices("witchTask2");
                    },
                },
            ],

            witchTask3: [
                {
                    text: "Зізнаюсь, що іноді боюсь, але хочу бути чесним.",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Чесність — ціна справжньої сили. Відьма дарує тобі магічний амулет сили.</p>`;
                        gainCharisma(3);
                        setChoices("witchReward");
                    },
                },
            ],

            witchReward: [
                {
                    text: "Подякувати відьмі і повернутись до замку",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти відчуваєш себе справжнім героєм. Нові пригоди чекають!</p>`;
                        setChoices("castleReturn");
                    },
                },
            ],

            
            cave: [
                {
                    text: "Оглянутись навколо входу",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Видно кілька слідів нищих істот, що ведуть вглиб. Щось шепоче з тіні...</p>`;
                        setChoices("caveEntry");
                    },
                },
                {
                    text: "Зайти в темряву печери",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Темрява поглинає тебе. Ти відчуваєш холод і запах старовини.</p>`;
                        setChoices("caveDeep");
                    },
                },
            ],

            caveEntry: [
                {
                    text: "Іти за слідами",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Сліди приводять тебе до кам'яної плити, вкритої магічними рунами.</p>` +
                            `<p>Вони світяться блакитним світлом. Що ти зробиш?</p>`;
                        setChoices("runeStone");
                    },
                },
                {
                    text: "Ігнорувати сліди і повернутись назад",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти повертаєшся до села, але відчуваєш, що багато пропустив.</p>`;
                        endStory();
                    },
                },
            ],

            runeStone: [
                {
                    text: "Доторкнутись до руни",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти відчуваєш, як магія проходить крізь тебе. Раптом воротя відкриваються у стіні.</p>`;
                        gainIntelligence(2);
                        setChoices("hiddenChamber");
                    },
                },
                {
                    text: "Оглянути плиту навколо",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти помічаєш зображення дракона, що охороняє щось цінне.</p>`;
                        setChoices("dragonRune");
                    },
                },
            ],

            hiddenChamber: [
                {
                    text: "Увійти до Таємної Комнати",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Комната наповнена світлом і стародавніми скрижалями. Є артефакт на п'єдесталі.</p>`;
                        setChoices("artifactChoice");
                    },
                },
                {
                    text: "Відступити і відпочити",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти відчуваєш втому і вирішуєш відпочити.</p>`;
                        stats.health = Math.min(stats.health + 50, 100);
                        updateStatsDisplay();
                        setChoices("restAfterCave");
                    },
                },
            ],

            artifactChoice: [
                {
                    text: "Взяти Артефакт",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Як тільки ти торкаєшся Артефакту, відчуваєш приток неймовірної сили.</p>`;
                        gainStrength(3);
                        gainCharisma(1);
                        setChoices("powerSurge");
                    },
                },
                {
                    text: "Ігнорувати і вийти",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти не готовий до цієї сили і залишаєш Артефакт недоторканим.</p>`;
                        setChoices("caveExit");
                    },
                },
            ],

            powerSurge: [
                {
                    text: "Вивчити нову силу",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ви починаєте контролювати нову силу, відчуваючи, як вона проникає у твої жили.</p>`;
                        gainIntelligence(2);
                        setChoices("masterPower");
                    },
                },
                {
                    text: "Вийти на поверхню з Артефактом",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти повертаєшся до життя на поверхні, але тепер з великою відповідальністю.</p>`;
                        endStory();
                    },
                },
            ],

            masterPower: [
                {
                    text: "Використати силу для добра",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти рятуєш село від нападу чудовиськ, ставши героєм усіх.</p>`;
                        gainCharisma(3);
                        setChoices("finalHero");
                    },
                },
                {
                    text: "Захотіти більше влади",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Твоя жадоба влади призводить до темної сторони, і ти поступово втрачаєш контроль.</p>`;
                        takeDamage(30);
                        setChoices("darkPath");
                    },
                },
            ],

            finalHero: [
                {
                    text: "Прийняти своє місце захисника",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти засновуєш нову еру миру, ставши легендою.</p>`;
                        endStory();
                    },
                },
                {
                    text: "Відпочити та подумати про майбутнє",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти розмірковуєш, який шлях обрати надалі.</p>`;
                        setChoices("heroContemplate");
                    },
                },
            ],

            darkPath: [
                {
                    text: "Шукати допомоги у мудреців",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Мудреці допомагають тобі приборкати темну силу, але ціна велика.</p>`;
                        takeDamage(20);
                        gainCharisma(2);
                        setChoices("redemption");
                    },
                },
                {
                    text: "Заглибитися у темряву остаточно",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти повністю віддаєшся темній силі і стаєш ворогом свого народу.</p>`;
                        endStory();
                    },
                },
            ],

            redemption: [
                {
                    text: "Почати нове життя із чеснотами",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти покидаєш старі шляхи і стаєш захисником слабких.</p>`;
                        setChoices("finalHero");
                    },
                },
            ],

            heroContemplate: [
                {
                    text: "Подорожувати світом",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти відправляєшся в незвідані землі, щоб знайти справжнє покликання.</p>`;
                        endStory();
                    },
                },
                {
                    text: "Залишитися в замку та навчати нових героїв",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Твоє ім’я стає легендою, а ти — наставником майбутніх поколінь.</p>`;
                        endStory();
                    },
                },
            ],

            castleSneakIn: [
                {
                    text: "Прослизнути через малий лаз",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти непомітно пройшов і опинився у складній мережі коридорів.</p>`;
                        setChoices("castleLabyrinth");
                    },
                },
            ],

            castleLabyrinth: [
                {
                    text: "Пройти далі",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Несподівано чути голоси. Двоє охоронців говорять про змову.</p>`;
                        setChoices("guardConspiracy");
                    },
                },
            ],

            guardConspiracy: [
                {
                    text: "Підслухати розмову",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Вони планують зрада короля! Ти можеш попередити короля або використати цю інформацію собі на користь.</p>`;
                        setChoices("chooseSpyAction");
                    },
                },
            ],

            chooseSpyAction: [
                {
                    text: "Попередити короля",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Король дуже вдячний і дає тобі титул Вірного Рицаря.</p>`;
                        gainCharisma(3);
                        setChoices("castleRoyalFavor");
                    },
                },
                {
                    text: "Використати інформацію, щоб отримати владу",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти шантажуєш змовників і береш контроль над частиною замку.</p>`;
                        gainStrength(3);
                        setChoices("castlePowerPlay");
                    },
                },
            ],

            castleRoyalFavor: [
                {
                    text: "Прийняти титул і залишитися в замку",
                    action: () => {
                        storyText.innerHTML = `<p>Твоє ім’я в історії записано золотими літерами.</p>`;
                        endStory();
                    },
                },
                {
                    text: "Відмовитись і вирушити у світ",
                    action: () => {
                        storyText.innerHTML = `<p>Ти починаєш пошуки нових пригод.</p>`;
                        setChoices("cave");
                    },
                },
            ],

            castlePowerPlay: [
                {
                    text: "Закріпити владу, борючись з ворогами",
                    action: () => {
                        storyText.innerHTML = `<p>Жорстокі бої, але ти виходиш переможцем серед інтриг замку.</p>`;
                        gainStrength(3);
                        takeDamage(20);
                        setChoices("castleRule");
                    },
                },
            ],

            castleRule: [
                {
                    text: "Правити замком спокійно",
                    action: () => {
                        storyText.innerHTML = `<p>Ти побудував сильне королівство та визнання.</p>`;
                        endStory();
                    },
                },
            ],

            castleGuardConfront: [
                {
                    text: "Пояснити, що шукаєш правду",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Охоронець замислюється і пропускає тебе, заодно підказує де знайти короля.</p>`;
                        gainCharisma(1);
                        setChoices("castleMeetKing");
                    },
                },
                {
                    text: "Почати бійку",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Воїн сильний, але ти виграєш, хоч і отримуєш травми.</p>`;
                        takeDamage(25);
                        gainStrength(2);
                        setChoices("castleAfterFight");
                    },
                },
            ],

            castleMeetKing: [
                {
                    text: "Попросити аудієнцію",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Король приймає тебе, вислуховує і дає завдання врятувати королівство від темряви.</p>`;
                        setChoices("kingQuest");
                    },
                },
            ],

            kingQuest: [
                {
                    text: "Прийняти завдання",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Король дає тобі карту і магічний меч.</p>`;
                        gainStrength(2);
                        gainCharisma(1);
                        setChoices("questStart");
                    },
                },
                {
                    text: "Відмовитись",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Король розчарований, а ти стаєш вигнанцем.</p>`;
                        setChoices("exile");
                    },
                },
            ],

            questStart: [
                {
                    text: "Вирушити у темний ліс",
                    action: () => {
                        storyText.innerHTML =
                            `<p>В лісі ти стикаєшся з магічними істотами, які можуть стати друзями або ворогами.</p>`;
                        setChoices("forestCreatures");
                    },
                },
            ],

            exile: [
                {
                    text: "Пошукати прихисток у сусідніх землях",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Відомості про тебе губляться у вітрах часу. Це кінець історії для героя...</p>`;
                        endStory();
                    },
                },
            ],

            forestCreatures: [
                {
                    text: "Проговорити з мудрим ельфом",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ельф розповідає про древню небезпеку, яка нависає над світом.</p>`;
                        gainIntelligence(2);
                        setChoices("elfWarning");
                    },
                },
                {
                    text: "Напасти на лісових духів",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ти оголюєш меч і нападаєш. Бій триває довго, ти отримуєш травми.</p>`;
                        takeDamage(30);
                        setChoices("afterFightForest");
                    },
                },
            ],

            elfWarning: [
                {
                    text: "Взятися за допомогу лісу",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ліс дарує тобі силу й оберігає в дорозі.</p>`;
                        gainStrength(2);
                        gainCharisma(2);
                        setChoices("forestAlliance");
                    },
                },
            ],

            forestAlliance: [
                {
                    text: "Досліджувати подальші небезпеки",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Ви разом вирушаєте на пошуки джерела темряви.</p>`;
                        setChoices("darknessSource");
                    },
                },
            ],

            darknessSource: [
                {
                    text: "Пройти в глибоку печеру",
                    action: () => {
                        storyText.innerHTML =
                            `<p>Темрява чекає на тебе, але твоя воля незламна.</p>`;
                        setChoices("finalBattle");
                    },
                },
            ],

            finalBattle: [
                {
                    text: "Битися з темним володарем",
                    action: () => {
                        if(stats.strength >= 10 && stats.intelligence >= 8) {
                            storyText.innerHTML =
                                `<p>Ти переміг темного володаря і зцілив землі від його прокляття.</p>` + 
                                `<p>Ти став легендою.</p>`;
                            endStory();
                        } else {
                            storyText.innerHTML =
                                `<p>Битва тяжка. Без достатньої сили і розуму ти зазнаєш поразки...</p>`;
                            takeDamage(100);
                            endStory();
                        }
                    },
                },
            ],

            

        };

        if (choicesMap[path]) {
            choicesMap[path].forEach(choice => {
                let btn = document.createElement("button");
                btn.textContent = choice.text;
                btn.addEventListener("click", choice.action);
                choicesDiv.appendChild(btn);
            });
        } else {
            endStory();
        }
    }

    function endStory() {
        let choicesDiv = document.querySelector(".choices");
        choicesDiv.innerHTML = "";

        let restartBtn = document.createElement("button");
        restartBtn.textContent = "Почати спочатку";
        restartBtn.addEventListener("click", () => {
            location.reload();
        });
        choicesDiv.appendChild(restartBtn);
    }
});
