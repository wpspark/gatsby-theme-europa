import React, { Component } from 'react'
import Layout from "../layouts/postIndex"
import SEO from "../utils/seo"
import PostAuthor from "../components/postAuthor/index"
import { Link } from "gatsby"
import { DiscussionEmbed } from "disqus-react";

class PostTemplate extends Component {

	constructor(props) {
		super(props);

		this.state = {
			base_url: process.env.baseUrl,
			featured_image: 'https://via.placeholder.com/600x320'
		}
	}
  
  render() {
		const data = this.props.pageContext.wordpressPost;
		const disqusShortname = this.props.pageContext.site.siteMetadata.disqusShortname;
		const prevPost = this.props.pageContext.prev
		const nextPost = this.props.pageContext.next
		const disqusConfig = {
				identifier: data.id,
				title: data.title,
		};

    return (
			<Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata} featuredImage={data.spark_media} data={data}>
				
				<SEO title={data.title} />

				<section className="hero">
					<div className="hero-bodyy">
						<div className="container">
							
							<div className="section hero-content">
								<div className="columns">
									<div className="column is-offset-2 is-8">
										<div className="post content is-medium card card-content" dangerouslySetInnerHTML={{__html:data.content}} />
										
										<div className="subtitle is-4">
											
											<div className="tags is-centered are-medium"
												style={{
													margin: '15px auto',
												}}
											>
												{data.categories && data.categories.map(
												category => <span className="tag" key={category.id}><Link key={category.id} to={'/categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></span>
												)}
											</div>
										</div>
										<section className="single-post-pagination is-flex" style={{justifyContent: "space-between"}}>
											{prevPost && <Link to={`/post/${prevPost}`} className="button post-left" >Previous Post</Link> }
											{nextPost && <Link to={`/post/${nextPost}`} className="button post-right" >Next Post</Link> }
										</section>
										
										<PostAuthor data={data.author}/>
										
										<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


			</Layout>
    )
  }
}

export default PostTemplate