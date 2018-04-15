package com.votech.tav.config;

import org.sitemesh.builder.SiteMeshFilterBuilder;
import org.sitemesh.config.ConfigurableSiteMeshFilter;


public class WebSiteMeshFilter extends ConfigurableSiteMeshFilter{

	protected void applyCustomConfiguration(SiteMeshFilterBuilder builder) {
		builder.addDecoratorPath("/*", "/admin/index")
			   .addExcludedPath("/admin/index")
			   .addExcludedPath("/secure/*");
	}
}
