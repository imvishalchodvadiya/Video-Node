import * as mongoose from 'mongoose';

import { model } from 'mongoose';

const userSchema = new mongoose.Schema({
  email:  String, 
  password: String,
  firstname: String,
  lastname: String,
  created_at: {type:Date,default: new Date()},
  updated_at:{type:Date,default: new Date()}
  
});

export default model('User', userSchema);


<!-- <div class="row">
												<?php 
													$user = wp_get_current_user();
													$user_id = ( isset( $user->ID ) ? (int) $user->ID : 0 );
													if ( edd_reviews()->is_review_status( 'disabled' ) ) {
														return;
													}
													$total_reviews = edd_reviews()->count_reviews();
													if ( $total_reviews > 0 ) { ?>
														<div class="col-md-8">
															<div id="edd-reviews" class="edd-reviews-area">
																<div class="edd-reviews-list">
																	<?php edd_reviews()->render_reviews(); ?>
																	<div class="reviewmore-button">
																		<button id="showmorereview"  type="button" class="btn-details wbutton">More Review</button>
																	</div>
																</div>
															</div>
														</div>
													<?php } else { ?>
														<div class="col-md-12">
															<div id="edd-reviews" class="edd-reviews-area">
																<div class="edd-reviews-list">
																	<span>No Review Yet</span>
																</div>
															</div>
														</div>	
													<?php }
												?>																							
												<?php if(!empty($average_rating)) { ?>
													<div class="col-md-4">
														<div class="sidebar-tags sidebar-rating">
															<div class="entrycategories">
																<div class="entrycategories-head">
																<h3>Item rating</h3>
																<div class="edd-review-meta-rating">
																	<?php if(round($average_rating) == '5') { ?>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																	<?php } else if(round($average_rating) == '4') { ?>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star-outline"></i>
																	<?php } else if(round($average_rating) == '3') { ?>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																	<?php } else if(round($average_rating) == '2') { ?>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																	<?php } else if(round($average_rating) == '1') { ?>
																		<i class="mdi mdi-star"></i>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																	<?php } else { ?>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																		<i class="mdi mdi-star-outline"></i>
																	<?php } ?>
																</div>
															</div>
																<?php
																	if ( edd_reviews()->is_review_status( 'disabled' ) ) {
																		return;
																	}
																	edd_reviews()->maybe_show_review_breakdown();
																?>
															</div>
														</div>
													</div>
												<?php } ?>												
											</div> -->
											
											<!-- <div>
												<?php if ( comments_open() || '0' != get_comments_number() ) //comments_template(); ?>
											</div> -->