<?php

$options = array(
	'zakra_footer_html_2_heading' => array(
		'type'         => 'customind-accordion',
		'title'        => esc_html__( 'HTML 2', 'zakra' ),
		'section'      => 'zakra_footer_builder_html_2',
		'sub_controls' => apply_filters(
			'zakra_footer_html_2_sub_controls',
			array(
				'zakra_footer_html_2'                  => array(
					'default'  => '',
					'type'     => 'customind-editor',
					'title'    => esc_html__( 'Text/HTML for HTML 2', 'zakra' ),
					'section'  => 'zakra_footer_builder_html_2',
					'priority' => 30,
				),
				'zakra_footer_html_2_text_color'       => array(
					'title'     => esc_html__( 'Color', 'zakra' ),
					'default'   => '',
					'type'      => 'customind-color',
					'section'   => 'zakra_footer_builder_html_2',
					'transport' => 'postMessage',
				),
				'zakra_footer_html_2_link_color_group' => array(
					'type'         => 'customind-color-group',
					'title'        => esc_html__( 'Links', 'zakra' ),
					'section'      => 'zakra_footer_builder_html_2',
					'sub_controls' => apply_filters(
						'zakra_footer_html_2_link_color_sub_controls',
						array(
							'zakra_footer_html_2_link_color'       => array(
								'default'   => '',
								'type'      => 'customind-color',
								'title'     => esc_html__( 'Normal', 'zakra' ),
								'transport' => 'postMessage',
								'section'   => 'zakra_footer_builder_html_2',
							),
							'zakra_footer_html_2_link_hover_color' => array(
								'default'   => '',
								'type'      => 'customind-color',
								'title'     => esc_html__( 'Hover', 'zakra' ),
								'transport' => 'postMessage',
								'section'   => 'zakra_footer_builder_html_2',
							),
						)
					),
				),
				'zakra_footer_html_2_font_size'        => array(
					'title'       => esc_html__( 'Font Size', 'zakra' ),
					'default'     => array(
						'size' => '',
						'unit' => 'px',
					),
					'type'        => 'customind-slider',
					'section'     => 'zakra_footer_builder_html_2',
					'transport'   => 'postMessage',
					'units'       => array( 'px', 'em', 'rem' ),
					'defaultUnit' => 'px',
					'input_attrs' => array(
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					),
				),
				'zakra_footer_html_2_margin'           => array(
					'default'     => array(
						'top'    => '',
						'right'  => '',
						'bottom' => '',
						'left'   => '',
						'unit'   => 'px',
					),
					'type'        => 'customind-dimensions',
					'title'       => 'Margin',
					'section'     => 'zakra_footer_builder_html_2',
					'transport'   => 'postMessage',
					'units'       => array( 'px', 'em', '%', 'rem' ),
					'defaultUnit' => 'px',
				),
				'zakra_html_2_alignment_divider'       => array(
					'type'    => 'customind-divider',
					'variant' => 'dashed',
					'section' => 'zakra_footer_builder_html_2',
				),
				'zakra_html_2_alignment'               => array(
					'default'   => '',
					'type'      => 'customind-toggle-button',
					'title'     => esc_html__( 'Alignment', 'zakra' ),
					'section'   => 'zakra_footer_builder_html_2',
					'transport' => 'postMessage',
					'choices'   => array(
						'left'   => esc_html__( 'Left', 'zakra' ),
						'center' => esc_html__( 'Center', 'zakra' ),
						'right'  => esc_html__( 'Right', 'zakra' ),
					),
				),
			)
		),
		'collapsible'  => apply_filters( 'zakra_footer_html_2_accordion_collapsible', false ),
	),
);

if ( ! zakra_is_zakra_pro_active() ) {
	$options['zakra_html_2_upgrade'] = array(
		'type'        => 'customind-upsell',
		'description' => esc_html__( 'Unlock more features available in Pro version.', 'zakra' ),
		'title'       => esc_html__( 'Learn more', 'zakra' ),
		'url'         => esc_url( 'https://zakratheme.com/pricing/?utm_source=zakra-theme&utm_medium=customizer-option-name&utm_campaign=zakra-customizer+&utm_content=Learn+More' ),
		'section'     => 'zakra_footer_builder_html_2',
		'priority'    => 100,
	);
}

zakra_customind()->add_controls( $options );