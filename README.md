The sorting of articles on the main page is controlled by the frontmatter in the posts under _posts

For Article types: 
If you want to add an video then you must have type as 'video' and a 'YouTubeID' set in the frontMatter of the article. We'll only use YouTube as the video source. There will be a page for this, so it's best to put some content on that page with the link just in case.
If the target is an external link, then add the href as externalLink in the frontmatter of the article.

For posting PDFs:

Save the PDFs in /public/pdfs and then use the rewrite option in next.config.js to rewrite the incoming path (source) you would like to use (e.g. www.jcv.com/cv) to the target public file (destination) (e.g. /pdfs/john_cv_2020.pdf)

Using a drafts folder as a holding place for posts that you want to depublish since if it exists in the _posts folder, it's going to get wrapped in on the everything tag. Could do a drafts funcitonality in the future, but don't really see a reason to now.