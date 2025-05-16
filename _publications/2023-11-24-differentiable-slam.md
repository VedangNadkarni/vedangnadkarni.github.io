---
title: "Differentiable SLAM Helps Deep Learning-based LiDAR Perception Tasks"
collection: publications
permalink: /publication/2023-11-24-differentiable-slam
excerpt: 'We design a SLAM Loss to train LiDAR based models.'
date: 2023-11-24
venue: 'BMVC'
slidesurl: 'https://bmvc2022.mpi-inf.mpg.de/BMVC2023/0822_poster.pdf'
paperurl: 'https://papers.bmvc2023.org/0822.pdf'
citation: 'Prashant Kumar, Dheeraj Vattikonda, Vedang Bhupesh Shenvi Nadkarni, Erqun Dong, and Sabyasachi Sahoo, “Differentiable SLAM helps deep learning-based lidar perception tasks” in <i>34th British Machine Vision Conference (BMVC)</i>, Aberdeen, UK, BMVA Press, 2023, p. 822'
---

<sub>[AI based explainer](#ai-summary) [Poster](#poster) [Paper](#paper) [Citation](#rec-citation)</sub>

<p style="font-size: 14px; line-spacing: 1.2;">
We investigate a new paradigm that uses differentiable SLAM architectures in a self-supervised manner to train end-to-end deep learning models in various LiDAR based applications. To the best of our knowledge there does not exist any work that leverages SLAM as a training signal for deep learning based models. We explore new ways to improve the efficiency, robustness, and adaptability of LiDAR systems with deep learning techniques. We focus on the potential benefits of differentiable SLAM architectures for improving performance of deep learning tasks such as classification, regression as well as SLAM. Our experimental results demonstrate a non-trivial increase in the performance of two deep learning applications - Ground Level Estimation and Dynamic to Static LiDAR Translation, when used with differentiable SLAM architectures. Overall, our findings provide important insights that enhance the performance of LiDAR based navigation systems. We demonstrate that this new paradigm of using SLAM Loss signal while training LiDAR based models can be easily adopted by the community.
</p>

<div style="margin-bottom: -220px;" id='ai-summary'>
    <iframe src="https://bytez.com/docs/arxiv/2309.09206/paper" frameborder="0" height="1200px" style="transform: scale(0.8); transform-origin: 0 0; width: 125%; height: 1200px;">
        Looks like your browser does not support Bytez.ai's html embedding. Visit <a href="https://bytez.com/docs/arxiv/2309.09206/paper">https://bytez.com/docs/arxiv/2309.09206/paper</a> for an AI based explainer of this paper.
    </iframe>
</div>

<div style="margin-bottom: 20px;" id='paper'>
    <iframe src="{{ page.paperurl }}" frameborder="0" width="100%" height="600px">
        Your browser does not support iframes. Please download the PDF to view it: 
        <a href="{{ page.paperurl }}">Download PDF</a>
    </iframe>
</div>

<div style="margin-bottom: -100px;" id='poster'>
    <iframe src="{{ page.slidesurl }}" frameborder="0" width="100%" height="1270px" style="transform: scale(0.9); transform-origin: 0 0; width: 111%; height: 1240px;">
        Your browser does not support iframes. Please download the PDF to view it: 
        <a href="{{ page.slidesurl}}">Download PDF</a>
    </iframe>
</div>

[Download arxiv preprint here](https://arxiv.org/abs/2309.09206)

<div id='rec-citation'></div>