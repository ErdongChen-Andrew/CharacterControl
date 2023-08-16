import {
	KHR_DF_FLAG_ALPHA_STRAIGHT,
	KHR_DF_KHR_DESCRIPTORTYPE_BASICFORMAT,
	KHR_DF_MODEL_UNSPECIFIED,
	KHR_DF_PRIMARIES_BT709,
	KHR_DF_TRANSFER_SRGB,
	KHR_DF_VENDORID_KHRONOS,
	KHR_DF_VERSION,
	KHR_SUPERCOMPRESSION_NONE,
	VK_FORMAT_UNDEFINED,
} from './constants';

/**
 * Represents an unpacked KTX 2.0 texture container. Data for individual mip levels are stored in
 * the `.levels` array, typically compressed in Basis Universal formats. Additional properties
 * provide metadata required to process, transcode, and upload these textures.
 */
export class KTX2Container {
	/**
	 * Specifies the image format using Vulkan VkFormat enum values. When using Basis Universal
	 * texture formats, `vkFormat` must be VK_FORMAT_UNDEFINED.
	 */
	public vkFormat = VK_FORMAT_UNDEFINED;

	/**
	 * Size of the data type in bytes used to upload the data to a graphics API. When `vkFormat` is
	 * VK_FORMAT_UNDEFINED, `typeSize` must be 1.
	 */
	public typeSize = 1;

	/** Width of the texture image for level 0, in pixels. */
	public pixelWidth = 0;

	/** Height of the texture image for level 0, in pixels. */
	public pixelHeight = 0;

	/** Depth of the texture image for level 0, in pixels (3D textures only). */
	public pixelDepth = 0;

	/** Number of array elements (array textures only). */
	public layerCount = 0;

	/**
	 * Number of cubemap faces. For cubemaps and cubemap arrays, `faceCount` must be 6. For all
	 * other textures, `faceCount` must be 1. Cubemap faces are stored in +X, -X, +Y, -Y, +Z, -Z
	 * order.
	 */
	public faceCount = 1;

	/** Indicates which supercompression scheme has been applied to mip level images, if any. */
	public supercompressionScheme = KHR_SUPERCOMPRESSION_NONE;

	/** Mip levels, ordered largest (original) to smallest (~1px). */
	public levels: KTX2Level[] = [];

	/** Data Format Descriptor. */
	public dataFormatDescriptor: KTX2DataFormatDescriptorBasicFormat[] = [
		{
			vendorId: KHR_DF_VENDORID_KHRONOS,
			descriptorType: KHR_DF_KHR_DESCRIPTORTYPE_BASICFORMAT,
			descriptorBlockSize: 0,
			versionNumber: KHR_DF_VERSION,
			colorModel: KHR_DF_MODEL_UNSPECIFIED,
			colorPrimaries: KHR_DF_PRIMARIES_BT709,
			transferFunction: KHR_DF_TRANSFER_SRGB,
			flags: KHR_DF_FLAG_ALPHA_STRAIGHT,
			texelBlockDimension: [0, 0, 0, 0],
			bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
			samples: [],
		},
	];

	/** Key/Value Data. */
	public keyValue: { [key: string]: string | Uint8Array } = {};

	/** Supercompression Global Data. */
	public globalData: KTX2GlobalDataBasisLZ | null = null;
}

///////////////////////////////////////////////////
// Mip Levels.
///////////////////////////////////////////////////

export interface KTX2Level {
	/** Compressed data of the mip level. */
	levelData: Uint8Array;

	/**
	 * Size of the mip level after reflation from supercompression, if applicable. When
	 * `supercompressionType` is BASISLZ, `uncompressedByteLength` must be 0. When
	 * `supercompressionType` is `NONE`, `uncompressedByteLength` must match the `levelData` byte
	 * length.
	 *
	 * _**NOTICE:** this implies that for formats such as UASTC, `uncompressedByteLength` may
	 * indicate size after ZSTD reflation (and of transcoded ASTC data), but does _not_ indicate
	 * size of decoded RGBA32 pixels._
	 */
	uncompressedByteLength: number;
}

///////////////////////////////////////////////////
// Data Format Descriptor (DFD).
///////////////////////////////////////////////////

export interface KTX2DataFormatDescriptorBasicFormat {
	vendorId: number;
	descriptorType: number;
	versionNumber: number;
	/** @deprecated Inferred. */
	descriptorBlockSize: number;
	colorModel: number;
	colorPrimaries: number;
	transferFunction: number;
	flags: number;
	texelBlockDimension: [number, number, number, number];
	bytesPlane: [number, number, number, number, number, number, number, number];
	samples: KTX2BasicFormatSample[];
}

export interface KTX2BasicFormatSample {
	bitOffset: number;
	bitLength: number;
	/** @deprecated Renamed to 'channelType'. */
	channelID?: number;
	channelType: number;
	samplePosition: number[];
	sampleLower: number;
	sampleUpper: number;
}

///////////////////////////////////////////////////
// Supercompression Global Data.
///////////////////////////////////////////////////

export interface KTX2GlobalDataBasisLZ {
	endpointCount: number;
	selectorCount: number;
	imageDescs: KTX2GlobalDataBasisLZImageDesc[];
	endpointsData: Uint8Array;
	selectorsData: Uint8Array;
	tablesData: Uint8Array;
	extendedData: Uint8Array;
}

interface KTX2GlobalDataBasisLZImageDesc {
	imageFlags: number;
	rgbSliceByteOffset: number;
	rgbSliceByteLength: number;
	alphaSliceByteOffset: number;
	alphaSliceByteLength: number;
}
