<?php
// This file is generated. Do not modify it manually.
return array(
	'svg-icon-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/svg-icon-block',
		'version' => '0.1.0',
		'title' => 'Svg Icon Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => true
			)
		),
		'attributes' => array(
			'icon' => array(
				'type' => 'string',
				'default' => 'star'
			)
		),
		'textdomain' => 'svg-icon-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
