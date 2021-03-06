export default {
    //destroy protein
    'Nonsense_Mutation': 4,
    'Nonsense': 4,
    'frameshift_variant': 4,
    'Frameshift': 4,
    'stop_gained': 4,
    'Stop Gained': 4,
    'Frame_Shift_Del': 4,
    'Frame_Shift_Ins': 4,
    'Frameshift Deletion': 4,
    'Frameshift Insertion': 4,

    //splice related
    'splice_acceptor_variant': 3,
    'splice_acceptor_variant&intron_variant': 3,
    'splice_donor_variant': 3,
    'splice_donor_variant&intron_variant': 3,
    'SpliceAcceptorDeletion': 3,
    'SpliceAcceptorSNV': 3,
    'SpliceDonorBlockSubstitution': 3,
    'SpliceDonorDeletion': 3,
    'SpliceDonorSNV': 3,
    'Splice_Site': 3,
    'splice_region_variant': 3,
    'splice_region_variant&intron_variant': 3,

    //modify protein
    'missense': 2,
    'non_coding_exon_variant': 2,
    'missense_variant': 2,
    'Missense Variant': 2,
    'Missense_Mutation': 2,
    'Missense': 2,
    'MultiAAMissense': 2,
    'start_lost': 2,
    'start_gained': 2,
    'De_novo_Start_OutOfFrame': 2,
    'Translation_Start_Site': 2,
    'CdsStartSNV': 2,
    'De_novo_Start_InFrame': 2,
    'stop_lost': 2,
    'Stop Lost': 2,
    'Nonstop_Mutation': 2,
    'initiator_codon_variant': 2,
    '5_prime_UTR_premature_start_codon_gain_variant': 2,
    'disruptive_inframe_deletion': 2,
    'disruptive_inframe_insertion': 2,
    'inframe_deletion': 2,
    'Inframe Deletion': 2,
    'InFrameDeletion': 2,
    'inframe_insertion': 2,
    'Inframe Insertion': 2,
    'InFrameInsertion': 2,
    'In_Frame_Del': 2,
    'In_Frame_Ins': 2,
    'Indel': 2,

    //do not modify protein
    'synonymous_variant': 1,
    'Synonymous Variant': 1,
    'Synonymous': 1,
    'Silent': 1,
    'stop_retained_variant': 1,

    //mutations effect we don't know
    // 'lincRNA': 0,
    'lincRNA': 1, // set per GH issue
    // 'RNA': 0,
    'RNA': 1, // set per GH issue
    'exon_variant': 0,
    'upstream_gene_variant': 0,
    'downstream_gene_variant': 0,
    "5'Flank": 0,
    "3'Flank": 0,
    "3'UTR": 0,
    "5'UTR": 0,
    '5_prime_UTR_variant': 0,
    '3_prime_UTR_variant': 0,
    // 'Complex Substitution': 0,
    'Complex Substitution': 1, // set per GH issue
    'intron_variant': 0,
    'intron': 0,
    'Intron': 0,
    'intergenic_region': 0,
    'IGR': 0
};

