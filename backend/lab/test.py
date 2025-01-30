import pypsa
import matplotlib.pyplot as plt
plt.style.use('bmh')


n = pypsa.Network("../../datasource/base_s_73_lvopt_6H_6H_2045.nc")

n.iplot()