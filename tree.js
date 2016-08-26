function getMetaData() {
// notities onderaan.

    var tree = {
        questions: [
            {
                // vraag 1,
				questionText:"How many Dependent Variables?",
                answers:{
                    "0":["One","Two or more"]
                }
            },
            {
                // vraag 2,
				questionText:"What Type of Dependent Variable?",
                answers:{
                    "01":["Continuous","Categorical"],
                    "02":["Continuous"]
                }
            },
            {
                // vraag 3,
				questionText:"How many Predictor Variables?",
                answers:{
                    "011":["One","Two or more"],
                    "012":["One","Two or more"],
                    "021":["One","Two or more"]
                }
            },
			{
                // vraag 4,
				questionText:"What type of Predictor Variable?",
                answers:{
                    "0111":["Categorical","Continuous"],
                    "0112":["Categorical","Continuous","Both"],
                    "0121":["Categorical","Continuous"],
                    "0122":["Categorical","Continuous","Both"],
					"0211":["Categorical"],
					"0212":["Categorical","Both"]
                }
            },
			{
                // vraag 5,
				questionText:"If a Categorical Predictor, how many categories?",
                answers:{
                    "01111":["Two","More than two"],
                    "01112":[],
                    "01121":[],
                    "01122":[],
                    "01123":[],
                    "01211":[],
                    "01212":[],
                    "01221":[],
                    "01222":[],
                    "01223":[],
                    "02111":[],
                    "02121":[],
                    "02122":[]
                }
            },
			{
                // vraag 6,
				questionText:"if a Categorical Predictor, were the same or different participants  used in each category?",
                answers:{
                    "011111":["Different","Same"],
                    "011112":["Different","Same"],
                    "011120":["Yes"],
                    "011210":["Different","Same","Both"],
                    "011220":[],
                    "011230":[],
                    "012110":["Different"],
                    "012120":[],
                    "012210":["Different"],
                    "012220":[],
                    "012230":["Different"],
                    "021110":[],
                    "021210":[],
                    "021220":[]
                }
            },
			{
                // vraag 7,
				questionText:"Do your Data meet the Assumptions for Parametric Tests?",
                answers:{
                    "0111111":["Yes","No"],
                    "0111112":["Yes","No"],
                    "0111121":["Yes","No"],
                    "0111122":["Yes","No"],
                    "0111201":["Yes","No"],
                    "0112101":["Yes"],
                    "0112102":["Yes"],
                    "0112103":["Yes"],
                    "0112200":["Yes"],
                    "0112300":["Yes"],
                    "0121101":[],
                    "0121200":[],
                    "0122101":[],
                    "0122200":[],
                    "0122301":[],
                    "0211100":["Yes"],
                    "0212100":["Yes"],
                    "0212200":["Yes"]
                }
            }

        ],
        results: {
            "01111111":"You should use an Independent t-test or Point-Biserial Correlation",
            "01111112":"You should use a Mann-Whitney Test",
            "01111121":"You should use a Dependent t-test",
            "01111122":"You should use a Wilcoxon Matched-Pairs Test",
			"01111211":"You should use a One Way independent ANOVA",
			"01111212":"You should use a Kruskal-Wallis Test",
			"01111221":"You should use a One Way Repeated Measures ANOVA",
			"01111222":"You should use Friedman’s ANOVA",
			"01112011":"You should use Pearson Correlation or Regression",
			"01112012":"You should use Spearman Correlation or Kendall’s Tau",
			"01121011":"You should use an Independent Factorial ANOVA or Multiple Regression",
			"01121021":"You should use a Factorial Repeated Measures ANOVA",
			"01121031":"You should use a Factorial Mixed ANOVA",
			"01122001":"You should use Multiple Regression analysis",
			"01123001":"You should use Multiple Regression or ANCOVA",
			"01211010":"You should use Pearson Chi-Square or Likelihood Ratio",
			"01212000":"You should use Logistic Regression or Biserial/Point-Biserial Correlation",
			"01221010":"You should use Loglinear Analysis",
			"01222000":"You should use Logistic Regression",
			"01223010":"You should use Logistic Regression",
			"02111001":"You should use MANOVA",
			"02121001":"You should use a Factorial MANOVA",
			"02122001":"You should use MANCOVA"
        }
    };
    return tree;
}



    /* NTS
	meta data bij tree.js: 2 keys:
    1) questions - array of questions with list of possible answers (0 to 3) for every question depending on previous answers path.
    First step Path(string of Answer Numbers) for everyone = 0, and 2 answer buttons to show.
    Second step added Answer Number of previous question to path.
    Depending on what you clicked it can be "01" (if you clicked "One" or "02" if you clicked "Two or more").
    Depending on Path "01" or "02" you get different possible answers to current question - Array of answers ["Continuous","Categorical"].
    If any question should not be shown for particular path it has empty Array of answers [].
    If for this particular path previous question was not shown we set for that question Answer number 0 and add it to Path
    for ex. Path "0122101" means user answered 1 option to the Question 1, than 2nd option to Question 2, 2 - Question 3,
    1 - Question4, Question5 was not shown, 1 - Question6;
    2) results - list of keys-possible Paths with values - result of decision tree. */
