If a video is a thousand pictures 
and a picture can show a thousand words,
then a video can probably show a lot of crap :)

## Example
<iframe width="400" height="200" src="https://www.youtube.com/embed/AHoucJ4qkSg" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Another examples
for almost every [GitHub Pull Request](https://github.com/uoa-compsci399-s1-2024/capstone-project-2024-s1-team-15/pulls?q=is%3Apr+is%3Aclosed) u made, u added an image or a video to showcase your solution to a particular requirement.

so it is great for showcasing both problems and solutions.

## Idea?
what about a video of a feature but it is interactive?

or another way to put it...
a regular website but it is automatically doing stuff (only for showcasing purposes) 🤔🤔💡💡

check out progress on this idea [here](./feature-preview/overview.md)

## How to add videos?

- embed using `<iframe>`
- show from external or internal source using `<video>`
   - can add a poster (thumbnail) to the video using `poster` attribute
   - can show 'not supported' message in inner content
      e.g. `<video> ...your browser doesn't support video elements... </video>`
- using [video.js](https://videojs.com/) for additional themes

### optimizing videos for web
don't forget about performance :)

tips:
- different video file format 
   e.g. WebM: not supported everywhere like in older browsers but lower file size than .mp4
   - use handbrake to covert the video file format
   - use a common `<video>` then multiple `<source>`'s inside it and browsers will use .webm by default with .mp4 as the fallback.
- think about the resolution
   - does it need to be this low or high?