import React from 'react';
import Link from "react-router-dom/es/Link";

import './course.css';

import ml from '../images/courses-icon/ml.svg';
import MachineLearning from './images/page-images/ml.gif';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'Environment Set-up and Python (Crash course)',
    'Numpy: Arrays, Indexing, Operations',
    'Pandas: Series, IO, Manipulation',
    'Pandas: Dataframes, Indexing, Columns',
    'Pandas: Sorting, Null, apply method',
    'Pandas: Groupby, Merging, MultiIndex'
]

const obscenities = [
    'Ստեղծել բազմաֆունկցիոնալ վեբ կայքեր',
    'Մշակել վեբ հավելվածներ նախատեսված տարբեր տեսակի պլատֆորմաների համար',
    'Տարբերակել JavaScript-ի framework-ների առավելությունները',
    'Կիրառել Ձեր գիտելիքները իրական նախագծում',
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես ML ծրագրավորող'
]

const conditions = [
    'Եթե տիրապետում եք նշված փուլերից որևէ մեկին, ապա կարող եք մասնակցել դասընթացներին՝ շրջանցելով տվյալ փուլը ՝ նախապես հանձնելով համապատսխան փուլի ամփոփիչ թեստը։',
    'Դասընթացները անցկացվում են շաբաթական 3 օր հաճախականությամբ, 2 ժամ տևողությամբ։',
    'Յուրաքանչյուր փուլի ավարտին անցկացվում է ամփոփիչ թեստ, և բարձր առաջադիմություն ցուցաբերելու դեպքում հնարավոր է օգտվել մինչև 20% զեղչից՝ հետագա փուլերի համար։',
    'Դասընթացների ընթացքում անընդմեջ իրականացվում են պրակտիկ բնույթի առաջադրանքներ:',
    'Դասընթացների ամբողջական փուլերի ավարտից հետո, շրջանավարտներին տրվում է հավաստագիր։',
    'Գործում են նաև անհատական հիմունքներով դասընթացներ, որի արժեքին և այլ մանրամասներին կարող եք ծանոթանալ կապվելով մեզ հետ։'
]

const instructors = [
    {
        fullName: 'Վոլոդյա Գալստյան',
        title: 'ML ծրագրավորող',
        img: 'https://it-center.am/images/tutors/ios/valodya.png',
        description: 'Front-End ծրագրավորողը ապահովում է կայքէջի արտաքին տեսքը, որի մշակման գործընթացում օգտագործվում է HTML և CSS, իսկ JavaScript-ը, որը ներկայումս համարվում է ամենապահանջված ծրագրավորման միջավայրը աշխարհում, ինչպես նաև այն նախատեսված է կոնտենտի դինամիկությունը ապահովելու համար և ոչ միայն։'
    }
]

const coursesDescription1 = 'Introduction to Machine Learning and main concepts';
const coursesDescription2 = '';
const coursesDescription3 = '';

const coursesList1 = [
    'Environment Set-up and Python (Crash course)',
    'Numpy: Arrays, Indexing, Operations',
    'Pandas: Series, IO, Manipulation',
    'Pandas: Dataframes, Indexing, Columns',
    'Pandas: Sorting, Null, apply method',
    'Pandas: Groupby, Merging, MultiIndex',
    'Retrieving, Processing, Storing Data',
    'Matplotlib: Figures, Axes, Styles',
    'Seaborn: Categorical, Regression, Grid',
    'Plotly, Cufflinks and Pandas plot',
    'Geographical plotting, Choropleth',
    'Kaggle and Course Project',
    'Project',
]

const coursesList2 = [
    'Statistical Learning, Prediction Accuracy vs. Interpretability, Bias-Variance Tradeoff',
    'Linear Regression, Qualitative Predictors',
    'Classification, Logistic Regression, Linear Discriminant Analysis',
    'K Nearest Neighbors, Comparisons of Methods, ROC curves, Confusion Matrix',
    'Resampling Methods, Cross-Validation',
    'Regularization, Subset Selection, Shrinkage, Dimension Reduction',
    'Beyond Linearity, Polynomial Regression, Splines, Generalized Additive Models',
    'Tree-Based Methods, Decision Trees, Bagging, Random Forests, Boosting',
    'Support Vector Machines, Maximal Margin, Multi Classes',
    'Unsupervised Learning, Principal Components Analysis, K-Means Clustering',
    'Recommender Systems, Pearson correlation coefficient',
    'Natural Language Processing, Count Vectorization, Pipeline',
    'Project'
]

const coursesList3 = [
    'Neural Network, Deep representation, Binary Classification',
    'Gradient Descent, Computation Graph ,Vectorization',
    'Activation Functions, Forward/ Back propagation',
    'Regularization, Vanishing/exploding Gradients, Mini-batch',
    'Adam optimization, LR decay, Hyperparameters, Softmax',
    'Orthogonalization, Test/Train/Dev sets, Avoidable Bias',
    'Data Mismatch, Transfer/Multi-task Learning, End-to-End',
    'CNN, Computer Vision, Edge Detection, Padding',
    'ResNets, Inception, Face recognition, Siamese',
    'Triplet Loss, Neural Style Transfer, Cost Function',
    'RNN, Language Models, LSTM, Bidirectional RNN',
    'NEmbedding Matrix, Word2vec, Beam search, Bleu Score',
    'Project'
]

const courseInformation = {
    status:'Բարձրակարգ',
    duration:'3',
    language: 'Անգլերեն',
    price:'50.000',
    courseTime: 'Jan 24, 2019 1:23:00'
}

class ML extends React.Component {
    componentDidMount() {
        document.title = 'Մեքենայական ուսուցման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'ml'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h5 id="main-course-title">Բազմապլատֆորմ</h5>
                                <h1 id="course-title">Մեքենայական ուսուցում</h1>
                                <a href="https://goo.gl/forms/ZvdN3oSdKJg4en953" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={ml} alt="Machine Learning" />
                            </section>
                        </section>
                    </section>
                    <Information items={courseInformation}/>
                </section>
                <section className="background" id="main-course-background">
                    <section id="main-course">
                        <section>
                            <section id="schema-background">
                                <nav id="schema">
                                    <ul>
                                        <li><Link to={"/"}>Գլխավոր էջ</Link></li>
                                        <li><Link to={"/courses"}>Դասընթացներ</Link></li>
                                        <li><Link to={"/courses/ml"}>Մեքենայական ուսուցման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Թվային տեխնոլոգիաների այս դարաշրջանում արհեստական բանականությունը օրեցոր զարգանում և կիրառվում է այնպիսի գերհզոր ՏՏ ընկերություններում, ինչպիսիք են՝ «Apple»-ը, «Google»-ը, «Microsoft»-ը, «Intel»-ը և մի շարք այլ աշխարհահռչակ կազմակերպություններ։ ՏՏ ոլորտում՝ մեքենայական ուսուցման շնորհիվ, ցանկացած անհնարին թվացող գաղափար կամ նախագիծ հնարավոր է իրականություն դարձնել։</p>
                                </article>
                                <img src={MachineLearning} alt="Machine Learning"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Data Manipulation and Visualization"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="Machine Learning (Theory and Practice)"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList3}
                                        Id="checkbox3"
                                        coursesDescription={coursesDescription3}
                                        coursesTitle="Deep Learning"
                                        forId="checkbox3"
                                        digitCounterClass="digit counter"
                                    />
                                </ul>
                                <Conditions Condition={conditions}/>
                            </section>
                            <aside>
                                <Instructors Instructor={instructors}/>
                            </aside>
                        </section>
                    </section>
                </section>
            </main>
        )
    }
}

export default ML