/* Registration JSON */
/* Should we consider making a separate field for the street address,
street address number, name, etc?. Can make for easier wrangling and
might improve accuracy. Could be used for some cool geographic visuals for
marketing, analysis, etc.*/

/* I'm splitting up city, state, zip code, etc. BECAUSE I CAN'T */

/* Would recommend asking for actual age (numeric value) -> would allow for
quant analyses and modelling by age in the future */

/* What is the expected output for checkbox (multi-selection) forms from the front end to the back end?  - is it a string with multiple values in one separated by a comma?*/

/* Add data validation for employment variable. Can't by unempolyed and employed at the same time? */

/* Do I need to have the values in quotes too if we are filling those in with reactive values provided by the user? */


{
    participant = {"emailAddress":email_address,
                    "aboutYou":[{"firstName":first_name},
                                 {"lastName":last_name},
                                 {"nickname":nick_name},
                                 {"streetAddress":street_address},
                                 {"city":city},
                                 {"stateTerritory":state},
                                 {"zipCode":zip},
                                 {"country":country},
                                 {"phoneNumber":phone_number},
                                 {"age":age},
                                 {"pronouns":pronouns},
                                 {"ethnicity":ethnicity},
                                 {"race":race},
                                 {"heritage":heritage},
                                 {"degreeLevel":degree_level},
                                 {"employment":employment},
                                 {"employmentAttitude":employment_attitude},
                                 {"employmentComment":employment_comment},
                                 {"obligation":obligation}],
              "technicalInsight":[{"codingXp":coding_xp},
                                 {"codingExplaination":coding_explain},
                                 {"passion":passion},
                                 {"curiosity":curiousity},
                                 {"appCreate":app_create},
                                 {"appIdea":app_idea}],
                  "eaoQuestions":[{"eao1":eao1},
                                  {"eao2":eao2},
                                  {"eao3":eao3},
                                  {"eao4":eao4},
                                  {"eao5":eao5},
                                  {"eao6":eao6},
                                  {"eao7":eao7},
                                  {"eao8":eao8},
                                  {"eao9":eao9},
                                  {"eao10":eao10},
                                  {"eao11":eao11},
                                  {"eao12":eao12},
                                  {"eao13":eao13},
                                  {"eao14":eao14},
                                  {"eao15":eao15},
                                  {"eao16":eao16},
                                  {"eao17":eao17},
                                  {"eao18":eao18},
                                  {"eao19":eao19},
                                  {"eao20":eao20},
                                  {"eao21":eao21}],
            "apprasialInventory1":[{"ai1":ai1},
                                  {"ai2":ai2},
                                  {"ai3":ai3},
                                  {"ai4":ai4},
                                  {"ai5":ai5},
                                  {"ai6":ai6},
                                  {"ai7":ai7},
                                  {"ai8":ai8}],
           "apprasialInventory2":[{"ai9":ai9},
                                  {"ai10":ai10},
                                  {"ai11":ai11},
                                  {"ai12":ai12},
                                  {"ai13":ai13},
                                  {"ai14":ai14},
                                  {"ai15":ai15},
                                  {"ai16":ai16},
                                  {"ai17":ai17},
                                  {"ai18":ai18},
                                  {"ai19":ai19}],
                "photoRelease":[{"permission":permission},
                                {"signature":signature},
                                {"headshot":headshot}]
    }
    
  }