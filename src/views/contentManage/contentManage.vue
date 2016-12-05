<template>
	<div>
		
		<el-table 
		    :data="contentLists"
		    stripe
		    class="contentTable"
		    style="width: 100%">
		    <el-table-column
		      prop="id"
		      label="ID"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="title"
		      label="标题"
		      width="180">
		    </el-table-column>
		    <el-table-column
			inline-template
		      label="封面">
		      <image-placeholder :src="row.cover_pic" ></image-placeholder>
		    </el-table-column>

		    <el-table-column
			  inline-template

		      label="发布时间">
		      <span>{{row.publishtime | dateFormat}}</span>
		    </el-table-column>
		    <el-table-column
			  inline-template
		      label="类型">
		      <span>{{row.contenttype | contenttype}}</span>
		    </el-table-column>
		    <el-table-column
		      prop="tag"
		      label="标签">
		    </el-table-column>

	    </el-table>
	    <div class="contentPages">
		    <el-pagination
		      layout="prev, pager, next"
		      @current-change="currentChange"
		      :page-size="15"
		      :total="count | toNumber">
		    </el-pagination>
		</div>
	</div>
</template>
<style lang="less">
	.contentTable{
		.cell{
			text-align: left;
		}
	}
	.contentPages{
		float: right;
		margin: 15px;
	}
</style>
<script>
  import { mapGetters } from 'vuex'
  import ImagePlaceholder from './../../components/image-placeholder'

 
  export default{

  	computed: {
      
      ...mapGetters({
        contentLists: 'getContentLists',
        count:'getCount'
      })
    },

    methods:{
    	currentChange(val){
      	this.$store.dispatch('fetchContentLists', val - 1)
    	}
    },

    created () {
      	this.$store.dispatch('fetchContentLists', 0)
      
    },
    components: {
      ImagePlaceholder
    }
  }
</script>