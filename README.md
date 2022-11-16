<h2>Motivation</h2>
This is not the traditional flow but some time you want to use complete html file inside react. e.g for <a href='https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes'>quiz</a>

<h2>Design</h2>
react has dangerouslySetInnerHTML and for the above github case it is not danger because the site is github which is reliable. so cross-site scripting (XSS) attacks because github will no allow a danger code on is site 