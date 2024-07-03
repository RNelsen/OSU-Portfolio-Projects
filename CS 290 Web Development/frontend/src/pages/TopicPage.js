import React from "react";

function TopicPage() {
    return (
        <>
        <h2>WEB DEVELOPMENT TOPICS</h2>
            <nav class="inlineNavClass">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">FrontEnd Design</a>
                <a href="#imageOptimization">Image Optimization</a>
                <a href="#cssSheets">Cascading Stylesheets</a>
                <a href="#Forms">Forms</a>
                <a href="#Express">Express</a>
                <a href="#JavaScript">JavaScript</a>
                <a href="#DOM">DOM</a>
            </nav>
            <article id="#webServers" class="articleClass">
                <h3>Web Servers</h3>
                <p class="paragraphOffset">
                    An <strong>index</strong> with regard to a server or website can mean a 
                    directory structure that exists in the server's file system. When a 
                    client, such as a web browser, sends a URL request, the request is in 
                    the form of an index structure. The forward slashes in the requested URL 
                    indicate what resource the web browser is asking to view. Index can also 
                    mean the default web page that the web server will 
                    send to the web browser if a specific resource is not indicated in the 
                    URL. The web server we are using is the <strong>Apache</strong> web 
                    server. Index.html has been configured to be the default web page. 
                </p>
                <p class="paragraphOffset">
                    In the browser’s <strong>web development/inspector tools</strong>, 
                    one can see several tabs. I’m using Firefox and can see Inspector, 
                    Debugger, Network, Style Editor, Performance, Memory, Storage, 
                    Accessibility, and Application. These tabs can show different aspects of 
                    what the browser is doing in the background to render a webpage. The 
                    difference between the local file and remote file is that there is that 
                    the remote file has a server that is sending information to the web 
                    browser. The remote web browser sends a request. This 
                    <strong>request</strong> consists of four parts: the request header, 
                    request header, a blank line, and optional body. The 
                    <strong>response</strong> from the web server is similar in that it also 
                    has four parts: response status, response header, blank line, and 
                    response body. The local file is only opened by the browser, 
                    so no network information is being passed between the client and the 
                    server. When a web page is opened locally, the Web Dev tools will not 
                    show network information. 
                </p>
                <p class="paragraphOffset">
                    The favicon.ico has a status of <strong>200</strong>, because the 
                    server was successfully located the requested information and sent it 
                    back to the web browser. The other two files, <strong>main.css</strong> 
                    and <strong>main.js</strong>, were not located on the 
                    server and a response of <strong>404</strong> was sent back to the 
                    browser. 
                </p>
                <p class="paragraphOffset">
                    The different parts of the URL 
                    https://web.engr.oregonstate.edu/~nelsenda/a2-nelsenda/ 
                    are as follows. The protocol is denoted by <strong>https</strong>. This 
                    is the encrypted hypertext transfer protocol. The <strong>domain 
                    name</strong> is oregonstate.edu which then maps to an IP address. The 
                    <strong>subdomain</strong> portion is web.engr or more accurately 
                    or the portion added to the front of oregonstate.edu. The 
                    <strong>resource</strong> portion is ~nelsenda/a1-nelsenda. This is the 
                    directory on the server where the web browser is requesting a file, and 
                    the default page being sent back is <strong>index.html</strong>. 
                    I’m assuming that index.html is one of the default files declared in 
                    the configuration file for the Apache web server. 
                </p>
            </article>
            <article id="frontendDesign" class="articleClass">
                <h3>Frontend Design</h3>
                <p class="paragraphOffset">
                    <strong>Frontend design</strong> is providing an experience that is 
                    comfortable and pleasing to the end user. Frontend design has evolved 
                    greatly over the years due to trend changes. Web designers should stay 
                    abreast of current trends in web development. This way they can create 
                    websites that are <strong>interactive</strong>, <strong>visual 
                    pleasing</strong>, with <strong>high usability</strong>. Websites should 
                    provide clean and consistent color schemes, fast loading images, be 
                    easily navigable, and be as error free as possible. 
                    When striving for website usability, a developer should use a 
                    combination of the <strong>Five "E'"</strong> listed below. 
                </p>
                <dl id="fiveE" class="articleClass">
                    <dt><strong>Effective</strong></dt>
                    <dd>Users are able to obtain the information they are looking for.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Webpages should be ready for interaction with the user in a reasonable amount of time.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>Users can easily understand how the pages are laid out on the website.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Various aspects of the website such as links, grammar, pictures should not contain errors.</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>The website should fit the intended audience and entice users to return.</dd>
                </dl>
                <p class="paragraphOffset, articleClass">
                    Page layout tags are used to section off parts of the webpage. Some 
                    page layout tags are <strong>header</strong>, <strong>nav</strong>, 
                    <strong>main</strong>, <strong>section</strong>, 
                    <strong>article</strong>, and <strong>footer</strong>. Note, this is not 
                    an all-inclusive list. A web browser will generally insert a line break 
                    after each layout tag. The page layout tags don't change the website too 
                    much visually, but they can be used with <strong>CSS</strong> 
                    to stylize the page. Additionally, these tags help search engines and 
                    other software understand the different sections of the webpage. A 
                    header tag is used for the banner of the website. A nav tag is 
                    used to move users from page to page on the website. A main tag is the 
                    block that holds the content of the website. A section tag is used to 
                    group common themes on the page. An article tag is 
                    used within a section that signifies one topic. A footer tag typically 
                    holds legal information, contact information, and critical links on the 
                    website. 
                </p>
                <p class="paragraphOffset">
                    <strong>Anchors</strong> on a webpage provide ways to quickly move to 
                    different sections of the webpage or go to a different page on the site. 
                    <strong>Navigational</strong> anchors create links to different pages on 
                    the website and is most commonly a separate section of the 
                    website. <strong>Text</strong> anchors are links inside a paragraph. 
                    This way, more information about the subject can be easily accessed by 
                    the user. 
                </p>
            </article>
            <article id="imageOptimization" class="articleClass">
                <h3>Image Optimization</h3>
                <p class="paragraphOffset">
                    There are <strong>six</strong> major specifications for optimizing 
                    images found on the web. These specifications are descriptive 
                    <strong>file name</strong>, <strong>small file size</strong>, 
                    <strong>exact dimensions</strong>, <strong>correct file format</strong>, 
                    <strong>resolution</strong>, and <strong>color mode</strong>. 
                    Descriptive file name is needed to enhance search engine optimizations. 
                    File names should include as much information as possible to ensure 
                    search bots are able to categorize the image correctly. File size is 
                    important to provide the fastest load times as possible. Image 
                    compression can be used to make the file small enough so that it is 
                    downloaded quickly and retains as much of the image data as possible. 
                    Pictures can also be resized to reduce file size. Cropping an image can 
                    also remove parts of the image that aren’t needed. The correct format 
                    should be used for the different parts of the webpage. JPG files are for 
                    online photos. Logos and icons are in the .GIF or 8-bit .PNG file 
                    format. Pictures that require a transparency are formatted in the 24-bit 
                    .PNG file format. Older monitors with reduced resolution display 72 
                    pixels per inch (ppi). The standard now is to have several image 
                    resolutions available for multiple monitor resolutions. Color modes are 
                    utilized to make sure that images are displayed correctly across 
                    different monitors. 
                </p>
                <p class="paragraphOffset">
                    The <strong>.JPG</strong> file format is used for photos because images 
                    can be compressed to a small file size without losing significant 
                    details. The formats <strong>.GIF</strong> and <strong>8-bit 
                    .PNG</strong> are useful for logos and icons because they provide rich 
                    colors, transparent backgrounds and scalability. Therefore, these 
                    formats are good for most screen sizes. <strong>24-bit .PNG</strong> 
                    files preserves variations in brightness and hue found in photographs. 
                    Since .PNG preserves sharp details, this format is a good for line art, 
                    logos, or type. 
                </p>
            </article>
            <article id="cssSheets" class="articleClass">
                <h3>Cascading Stylesheets</h3>
                <p class="paragraphOffset">
                    <strong>Cascading stylesheets</strong> (CSS) are used on websites 
                    and apps, because they provide a way to a to incorporate the 5 
                    elements of good frontend design. CSS can improve a website’s design 
                    so that it is <strong>easier</strong> to read, 
                    <strong>understand</strong>, <strong>visualize</strong>, and 
                    <strong>maintain</strong>. Using CSS can aid in maintaining correct 
                    branding by defining colors and color-schemes across the different 
                    webpages. CSS usage also leads to efficient webpage design and updates. 
                    CSS rules are only downloaded once, which can lead to increased page 
                    loading times. CSS is able to selectively or broadly target HTML tags. 
                    This means that with a few lines of code, a change can be made to each page 
                    simultaneously. 
                </p>
                <p class="paragraphOffset">
                    There are five ways to incorporate CSS styles. The first is using an 
                    external CSS file, either linked or imported. This method is the most 
                    efficient and preferred way to use a CSS file. As stated above, a change in the CSS file 
                    can affect many pages at once. CSS styles can also be embedded in HTML
                    <strong>&ltstyle&gt</strong> tags. This is useful for targeting HTML code directly. Another 
                    way is to target an HTML tag directly with an inline CSS attribute and 
                    value. The last two methods are JavaScript template literals and regular 
                    JavaScript. Overall, CSS styles are applied using an order of operations. 
                    Highest priority of CSS style is given to inline styles and lowest 
                    priority to linked or external CSS styles.
                </p>
            </article>
            <article id="Forms" class="articleClass">
                <h3>Forms</h3>
                <p class="paragraphOffset">
                    The six main goals of accessible forms are 1. <strong>Provide clear 
                    instructions</strong>, 2. <strong>Let users know why information is 
                    being gathered</strong>, 3. <strong>Autofocus the first field</strong>, 
                    4. <strong>Each field should be able to be controlled by 
                    keyboard</strong>, 5. <strong>Having 'tab' indexing to each 
                    field</strong>, and 6. <strong>Be sure that validation messages are 
                    readable</strong>. This is important for individuals that are new users 
                    to the World Wide Web or have disabilities. These forms should be as 
                    frustration free for all types of users.
                </p>
                <p class="paragraphOffset">
                    The major tags are <strong>&lt;form&gt;</strong>, 
                    <strong>&lt;input&gt;</strong>, <strong>&lt;select&gt;</strong>, 
                    <strong>&lt;textarea&gt;</strong>, and <strong>&lt;button&gt;</strong>. 
                    The forms tag is used to designate an area on the webpage 
                    as an area to enter data. Important attributes of this tag are action 
                    and method. These indicate where the form will be submitted and by what 
                    method. Forms that have many layers can be broken up using 
                    <strong>&lt;fieldset&gt;</strong> and <strong>&lt;legend&gt;</strong>. 
                    This adds depth to the form and separates groups of logical 
                    informational groups. <strong>Input</strong> is used to designate 
                    different types of input. There are 22 different types of input, ranging 
                    from free text to email and submit buttons. The type 
                    of data being gathered can be paired with different types of input. The 
                    <strong>select</strong> element is used for a drop-down list of choices. 
                    This is handy to let the user choose from a range of options, and keep 
                    the webpage uncluttered if there are several options to choose from. 
                    <strong>Textarea</strong> allows a user to input multiple lines of text. 
                    Finally, a <strong>button</strong> is used to activate a submitting 
                    action on the webpage. This is useful when a user is ready to submit the 
                    entered data. 
                    
                </p>
                <p class="paragraphOffset">
                    When developing a website form, the area occupied by the form should be 
                    big enough to allow usage with different screen sizes. This means that 
                    the height and width should be big enough to be selected by a fingertip 
                    when the webpage is viewed on a cell phone. Data should be grouped into 
                    logical arrangements and separate to reduce confusion. Elements of the 
                    form should also cater to individuals with disabilities. For example, 
                    the use of screen readers. Other common options are autofocus so that the 
                    user doesn't need to click on the page to start inputting. Being able to 
                    logically use the tab button to move from one field to another. Use of 
                    the <strong>required</strong> selector is also recommended so the user 
                    knows which data is required before submission.                     
                </p>
            </article>
            <article id="Express" class="articleClass">
                <h3>Express</h3>
                <p class="paragraphOffset">
                    <strong>Node.js</strong> is server-side software designed to delivery 
                    fast and scalable "server-side networking applications". 
                    Node applications are written in JavaScript, which is operating system 
                    agnostic. This means applications can be run on Windows, Macs, and Linux 
                    ecosystems. <strong>NPM</strong> is the package manager for Node.js. 
                    This allows pre-built applications and libraries to be locally installed 
                    quickly. Finally, <strong>Express</strong> is an application framework 
                    to develop web applications. Natively, Node doesn't 
                    have a way to support request handling or serving webpages. Therefore, 
                    Express is used to handle these requests. Using these applications 
                    reduces development time by providing templates for development, quick 
                    customization and faster debugging.                     
                </p>
            </article>
            <article id="JavaScript" class="articleClass">
                <h3>JavaScript</h3>
                    <p class="paragraphOffset">
                        There are five main data types in JavaScript. These are a 
                        <strong>number</strong>, a <strong>boolean</strong>, a 
                        <strong>string</strong>, a <strong>symbol</strong>, and <strong>special 
                        values undefined and null</strong>. <strong>Objects</strong> in 
                        JavaScript are used to hold name-value pairs. <strong>Arrays</strong> 
                        are objects where property names are of the string datatype. 
                        <strong>JSON</strong>, an abbreviation for JavaScript Object Notation, 
                        is a file format to exchange data between applications. 
                        <strong>Conditionals</strong> and <strong>loops</strong> are used to 
                        support branching and iterating through data structures. 
                        <strong>Object-oriented programming</strong> is a programming model that 
                        organizes software around groups of data rather than functions and 
                        logic. <strong>Functional programming</strong> is where programs are 
                        designed around functions. In this programming style, programs can be 
                        modularized and hopefully easier to maintain. 
                    </p>
            </article>
            <article id="DOM" class="articleClass">
                <h3>DOM</h3>
                    <p class="paragraphOffset">
                        Developer's use the <strong>Document Object Model (DOM)</strong> with 
                        <strong>JavaScript</strong> and <strong>Express</strong>, because it 
                        allows the developer to manipulate a webpage after it has been 
                        displayed. Using DOM with JavaScript is handy because of the ubiquitous 
                        nature of the JavaScript programming language. JavaScript also provides 
                        methods to access en element in the DOM. From these methods different 
                        elements can be changed, added, or removed. 
                    </p>
            </article>
        </>
    );
}

export default TopicPage;